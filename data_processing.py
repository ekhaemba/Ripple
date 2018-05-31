#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri May 11 11:22:45 2018

@author: ThisMac
"""
#%%
import pandas as pd
from config import get_trade_data
import numpy as np
from math import log
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPRegressor
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.neighbors import KNeighborsRegressor
from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet, SGDRegressor
from sklearn.ensemble import RandomForestRegressor, AdaBoostRegressor, BaggingRegressor, ExtraTreesRegressor, GradientBoostingRegressor
from sklearn.svm import SVR
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import RobustScaler
#%%
dep_variable = 'AdjTrend'
excluded_columns = ['yr','cmdCode']
#%%
def split_dates(frame):
    dates = frame.DisDate
    split_dates = dates.apply(lambda x: x.split('/'))
    years_only = split_dates.apply(lambda x: not x[0] and not x[1])
    months_only = split_dates.apply(lambda x: not x[0] and not not x[1])
    full_dates = split_dates.apply(lambda x: all(x))
    #Accurate to years only, months only and days only respectively
    return frame[years_only], frame[months_only], frame[full_dates]

def is_date(row,year=None,month=None,day=None):
    retVal = True
    if year:
        retVal = retVal and row['DisDate'].split('/')[2] == str(year)
    if month:
        retVal = retVal and row['DisDate'].split('/')[1] == str(month).zfill(2)#Zero-Padding
    if day:
        retVal = retVal and row['DisDate'].split('/')[0] == str(day).zfill(2)#Zero-Padding
    return retVal
#%%
death_df = pd.read_csv("deathRate.csv")
death_df.set_index('ISO',inplace=True)
#%%
#Retrieved once
emdat_df = pd.read_csv("emdata.csv",names=['DisDate','ISO','Type','Deaths','DollarDmg'])
trades = get_trade_data()
#%%
def get_year(date):
    return int(date.split('/')[2])
def get_unique_years(emdat_df):
    dates = emdat_df['DisDate']
    years = dates.apply(get_year)
    unique_years = years.unique()
    return unique_years
#%%
#Create emdat Yr,ISO indexed table
def get_disaster_frame(emdat_df):
    dis_frame = emdat_df.loc[:,['ISO','Deaths','DollarDmg']]
    dis_frame = dis_frame.assign(DisYear = emdat_df['DisDate'].apply(get_year))
    return dis_frame
#%%
#Create consolidated table from disaster frame
def consolidate(disaster_frame):
    return disaster_frame.groupby(['DisYear','ISO'],as_index=False).sum()
#%%
def scale_robust(consolidated):
    deaths = consolidated['Deaths']
    dollardmg = consolidated['DollarDmg']
    scale = RobustScaler()
    #Reshape to array of arrays
    deaths = deaths.values.reshape(-1,1)
    dollardmg = dollardmg.values.reshape(-1,1)
    #Scale
    deaths = scale.fit_transform(deaths)
    dollardmg = scale.fit_transform(dollardmg)
    impact = deaths + dollardmg
    impact = scale.fit_transform(impact)
    consolidated['Impact'] = impact
    return consolidated
#%%
#Create adjusted table from consolidated table
def adj_consolidated(consolidated):
    def adjust(x, isoset):
        adj_dollars = log(x.DollarDmg + 1,10)/10
        adj_deaths = 0
        this_pop = death_df['Population'].get(x.ISO,np.nan)
        this_deathrate = death_df['deathRate'].get(x.ISO,np.nan)
        if not np.isnan(this_pop) and not np.isnan(this_deathrate):
            adj_deaths = x.Deaths/((this_pop/1000)*this_deathrate)
        else:
            adj_deaths =  x.Deaths
        impact = adj_dollars + adj_deaths
#        print(impact.dtypes)
        return pd.Series([x.DisYear,x.ISO,adj_deaths,adj_dollars,impact],index=['DisYear','ISO','AdjDeath','AdjDollarDmg','Impact'])
    return consolidated.apply(adjust, axis=1)
#%%
#
#Regarding Comtrade
#
def get_world_trades(trades):
    '''
    This function returns the world export records given the trades frame from the database
    Conditions (From left to right): Is export, Partner is world, Commodity is not TOTAL, rt3ISO value exists
    '''
    return trades[(trades['rgCode']==2)&(trades['ptCode']==0)&(trades['cmdCode']!=-1)&(trades['rt3ISO'].notnull())]
#%%
def get_trends(world_trades):
    '''
    Returns a trends frame given the world frame
    For each country, commodity pair calculate the yearly percent change of the Trade Quantity
    Also calculates the pct change where it fills inf values with 0
    This occurs when the quant for the previous year was zero and then currently its non-zero
    This function used to be annoying and slow without the groupby command
    '''
    trades_copy = world_trades.copy()
    trades_copy = trades_copy.sort_values('yr')
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])
    trades_copy = groupies.filter(lambda x: len(x) > 1).reset_index(drop=True)
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])
    #Based on the quantity series create a frame with two columns.
    #One is the pct change with the infinities
    #The other is the pct_change where the inf = 0. As in nothing changed.
    def trendy(quant_series):
        return pd.DataFrame({'Trend':quant_series.pct_change(),'FilledTrend':quant_series.pct_change().replace(np.inf,0)})
    def adjust(value,med,std_dev):
            return (value - med)/std_dev
    #Based on the filled trend series create a dataframe with a single column
    #The adjusted value of the filled trend
    def trend_adj(filled_trend):
        #For each value return the difference to the median and divide by std deviation. 
        #Like a zscore
        if(len(filled_trend)==1):
            return pd.DataFrame({'AdjTrend':filled_trend})
        else:
            return pd.DataFrame({'AdjTrend':filled_trend.apply(adjust,args=(filled_trend.median(),filled_trend.std()))})
    trades_copy = pd.concat([trades_copy,groupies['TradeQuantity'].apply(trendy)],axis=1)
    trades_copy = trades_copy.dropna(subset=['FilledTrend'])#Drops the first record of each group
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])#Regroup for added columns
    trades_copy = pd.concat([trades_copy,groupies['FilledTrend'].apply(trend_adj)],axis=1)
    trades_copy['FilledTrend'] += 1
    return trades_copy
#%%
# =============================================================================
# world_trades = get_world_trades(trades)
# trends = get_trends(world_trades)
# =============================================================================
#%%
def get_resultant_table(joined_table,join_condition=None):
    iso_set = set(death_df['ISO'].unique())
    if join_condition is not None:
        joined_table = joined_table[joined_table['_merge']==join_condition]
    #Retrieves the comtrade ISO frame where the comtrade ISO is within the deathrate records
    #If so retrieve some particular columns and reset the index
    in_set = joined_table['rt3ISO'].apply(lambda x: x in iso_set)
    death_matches = joined_table.loc[in_set].reset_index(drop=True)
    #In this filtered frame fill all the NA Impact values with 0
    #The NA Impact is due to the left join not having a corresponding right record to merge with
    death_matches = death_matches.fillna(value={'Impact':0.})
    country_dummies = pd.get_dummies(death_matches['rt3ISO'])#Returns a one-hot dataframe of a categorical series.
    return pd.concat([country_dummies,death_matches[['cmdCode','yr','Impact','AdjTrend']]],axis=1)#Concatenates the dummies_frame and these columns. Column-wise

#%%
def print_plots(max_plots,frame):
    '''
    Prints Trend plots given a dataframe and amount of plots to create
    The plots are seperated by commodity over all countries
    X-axis is yr
    Y-axis is AdjTrend
    '''
    plot_count = 0
    for commodity, comgroup in frame.groupby('cmdCode'):
        if plot_count > max_plots:
            break
        plot_count += 1
        iso_groups = comgroup.groupby('ISO')
        fig, ax = plt.subplots(figsize=(8,6))
        for iso, isogrp in iso_groups:
            isogrp.plot(x='yr',y='AdjTrend',legend=True, label=iso, ax=ax, title=commodity)
#%%
def do_all():
    '''
    Returns all the relevant frames gathered by this script
    '''
    #Regarding disasters
    disaster_frame = get_disaster_frame(emdat_df)
    consolidated_frame = consolidate(disaster_frame)
    dis_adj = scale_robust(consolidated_frame)
    dis_adj = dis_adj.drop(columns=['Deaths','DollarDmg'])
    #Regarding trades
    world_trades = get_world_trades(trades)
    trends_table = get_trends(world_trades)
    trends_table = trends_table.drop(columns=['rgCode', 'rtCode','rtTitle','ptCode','ptTitle','pt3ISO','TradeQuantity','TradeValue'])
    #Join the trends table from comtrade with the disaster table from emdat
    joined_table = pd.merge(trends_table,dis_adj,left_on=['yr','rt3ISO'],right_on=['DisYear','ISO'],how='left',indicator=True)
    resultant_table = get_resultant_table(joined_table)
    return resultant_table, joined_table, dis_adj, trends_table
#%%
result_frame, joined_frame, dis_adj_frame, trends_frame = do_all()
#%%
def pred(comm_groups,commodity,model,columns_excluded = ['yr','cmdCode'], predicted_column = 'AdjTrend',plot_country=None, plot=False):
    '''
    Fits the model given the grouped commodities and the commodity
    '''
    #Split by group, then get the group
    this_group = comm_groups.get_group(commodity)
    
    y = this_group[predicted_column]
    X_train, X_test, y_train, y_test = train_test_split(this_group.drop(columns=predicted_column), y, test_size=0.25)
    train_predictors = X_train.drop(columns=columns_excluded)
    test_predictors = X_test.drop(columns=columns_excluded)
    model.fit(train_predictors,y_train)
    test_predicted = model.predict(test_predictors)
    countries_frame = X_test.drop(columns=columns_excluded + ['Impact'])
    if plot:
        fig, ax = plt.subplots(figsize=(8,6))
        if plot_country is not None:
            this_country_bool = countries_frame[plot_country] == 1
            if not this_country_bool.any():
                print('None are true',plot_country)
            else:
                years = X_test.loc[this_country_bool,'yr']
                predictions = test_predicted[this_country_bool]
                actual = y_test[this_country_bool]
                ax.scatter(years,predictions,label='Pred {}'.format(plot_country))
                ax.scatter(years,actual,label='Actual {}'.format(plot_country))
                ax.legend()
                plt.show()
        else:
            for column in countries_frame:
                this_country_bool = countries_frame[column] == 1
                if not this_country_bool.any():
                    print('None are true',column)
                    continue
                years = X_test.loc[this_country_bool,'yr']
                predictions = test_predicted[this_country_bool]
                actual = y_test[this_country_bool]
                ax.scatter(years,predictions,label='Pred {}'.format(column))
                ax.scatter(years,actual,label='Actual {}'.format(column))
            ax.legend()
            plt.show()
    return model, this_group
#%%
def test_models(result_frame,model_list,commodity,excluded_columns = ['yr','cmdCode'],dep_variable='AdjTrend',random_state=None,return_vals=False):
    best_score = -1
    best_model_name = ''
    best_model = None
    group = None
    ret_frame = None
    groups = result_frame.groupby('cmdCode')
    for model in model_list:
        this_model = model()
        model_name = this_model.__class__.__name__
        print("Current model",model_name)
        this_model, group = pred(groups,commodity,this_model,columns_excluded=excluded_columns)
        this_score = cross_val_score(this_model, group.drop(columns=excluded_columns+[dep_variable]), group[dep_variable], cv=3).mean()
        if this_score > best_score:
            print(best_model,"was beaten by",model_name)
            best_model_name = model_name
            best_score = this_score
            best_model = this_model
        if return_vals:
            ret_frame = pd.concat([ret_frame,pd.DataFrame({'ModelName':[model_name],'Score':[this_score],'Model':[this_model],'Commodity':[commodity]})])
    print("Best model was",best_model_name,'with a score of',best_score)
    if return_vals:
        return ret_frame
    else:
        return best_model, best_score, group
#%%
def gather(result_frame, commodities):
    model_list = [MLPRegressor,KNeighborsRegressor,LinearRegression, Ridge, Lasso, ElasticNet, SGDRegressor,RandomForestRegressor, AdaBoostRegressor, BaggingRegressor, ExtraTreesRegressor, GradientBoostingRegressor,SVR]
    super_frame = None
    for commodity in commodities:
        super_frame = pd.concat([super_frame,test_models(result_frame,model_list,commodity,random_state=12,return_vals=True)])
    return super_frame.reset_index(drop=True)
def bar_plot(gather_frame):
    groups = gather_frame.groupby('Commodity')
    for com, frame in groups:
        fig = plt.figure(figsize=(12,10))
        plt.bar(frame['ModelName'],frame['Score'])
        plt.xticks(rotation=45)
        plt.xlabel('Regression Type')
        plt.ylabel('Score')
        plt.title('Commodity {}'.format(com))
        plt.tight_layout()
        plt.savefig('bar-{}.png'.format(com))
#        plt.show()
def regression_plot(gather_frame,result_frame):
    groups = gather_frame.groupby('Commodity')
    res_groups = result_frame.groupby('cmdCode')
    for com, frame in groups:
        this_model = frame.loc[frame['Score'].idxmax(),'Model']
        the_frame = res_groups.get_group(com)
        years = the_frame['yr']
        predictors = the_frame.drop(columns=['yr','cmdCode','AdjTrend'])
        predictions = this_model.predict(predictors)
        model_name = this_model.__class__.__name__
        fig = plt.figure(figsize=(12,10))
        plt.scatter(years,the_frame['AdjTrend'],label='Actual')
        plt.scatter(years,predictions,label='Predicted')
        plt.legend()
        plt.xlabel('Year')
        plt.ylabel('Trend')
        plt.title('{} Commodity-{}'.format(model_name,com))
        plt.tight_layout()
        plt.savefig('{}-{}.png'.format(model_name,com))
#%%
#super_frame = gather(result_frame,commodities[:15])
#%%
#bar_plot(super_frame)
#%%
#regression_plot(super_frame,result_frame)
#%%
#frame.reset_index(inplace=True)
#fig, ax = plt.subplots()
#plt.figure(figsize=(12,10))
#plt.bar(frame['ModelName'],frame['Score'])
#plt.xticks(rotation=45)
#plt.show()
#%%
def debrief(group, model, commodity, excluded_columns = ['yr','cmdCode'],dep_variable='AdjTrend'):
    excluded_columns = ['yr','cmdCode']
    predictors = group.drop(columns=excluded_columns + dep_variable)
    predictions = model.predict(predictors)
    plt.scatter(group.yr,predictions,label='Predicted',)
    plt.scatter(group.yr,group.Impact,label='Actual')
    plt.xlabel('Year')
    plt.ylabel('Impact')
    plt.title('{} Regression results for commodity {}'.format(best.__class__.__name__, commodity))
    plt.legend()
    plt.show()
    this_score = cross_val_score(best, group.drop(columns=excluded_columns+['Impact']), group['Impact'], cv=4).mean()
    print(this_score)
def test_multiple_commodities(result_frame,commodities_list):
    model_list = [MLPRegressor,GaussianProcessRegressor,KNeighborsRegressor,LinearRegression, Ridge, Lasso, ElasticNet, SGDRegressor,RandomForestRegressor, AdaBoostRegressor, BaggingRegressor, ExtraTreesRegressor, GradientBoostingRegressor,SVR]
    best_best_score = -1
    best_best_model = None
    best_best_group = None
    best_commodity = ''
    for commodity in commodities_list:
        print("Testing commodity",commodity)
        this_model, this_score, this_group = test_models(result_frame,model_list,commodity)
        if this_score > best_best_score:
            best_best_score = this_score
            best_best_model = this_model
            best_best_group = this_group
            best_commodity = commodity
    debrief(best_best_group,best_best_model,best_commodity)
    return best_best_group, best_best_model, best_commodity
#%%
# =============================================================================
# commodities = result_frame.cmdCode.unique()
# this_group, this_model, this_comm = test_multiple_commodities(result_frame,commodities[:50])
# =============================================================================
#%%
model_list = [MLPRegressor,KNeighborsRegressor,LinearRegression, Ridge, Lasso, ElasticNet, SGDRegressor,RandomForestRegressor, AdaBoostRegressor, BaggingRegressor, ExtraTreesRegressor, GradientBoostingRegressor,SVR]
best, _, group = test_models(result_frame, model_list,1801,excluded_columns=excluded_columns,dep_variable=dep_variable)
#%%
fig, ax = plt.subplots()
german_vals = group[group['POL'] == 1]
german_vals.plot(x='yr',y=dep_variable,ax=ax,label='Actual')
predictions = best.predict(german_vals.drop(columns=excluded_columns + [dep_variable]))
ax.plot(german_vals['yr'],predictions,label='Predicted')
ax.legend()
plt.xlabel('Year')
plt.ylabel('AdjTrend')
plt.title('German Regression Predictions vs Actual')
#%%
dis_adj_frame[dis_adj_frame['ISO']=='BEL']
