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
    unique_years = get_unique_years(emdat_df)
    dis_frame = None
    for year in unique_years:
        next_frame = emdat_df[emdat_df.apply(lambda x: is_date(x,year=year), axis=1)]
        dis_frame = pd.concat([dis_frame,next_frame.apply(lambda x: pd.Series([year,x.ISO,x.Deaths,x.DollarDmg],index=['DisYear','ISO','Deaths','DollarDmg']),axis=1)])
#    dis_frame = dis_frame.infer_objects()
#    dis_frame = dis_frame.set_index(['DisYear', 'ISO'])
    dis_frame['DisYear'] = pd.to_numeric(dis_frame['DisYear'], errors='coerce')
    assert(dis_frame['DisYear'].notnull().all())
    return dis_frame
#%%
#Create consolidated table from disaster frame
def consolidate(disaster_frame):
    return disaster_frame.groupby(['DisYear','ISO'],as_index=False).sum()
#%%
#Create adjusted table from consolidated table
def adj_consolidated(consolidated):
    def adjust(x, isoset):
        adj_dollars = log(x.DollarDmg + 1,10)/10
        adj_deaths = 0
        if x.ISO in isoset:
            this_pop = death_df.loc[death_df.ISO==x.ISO,'Population'].iloc[0]
            this_deathrate = death_df.loc[death_df.ISO==x.ISO,'deathRate'].iloc[0]
            adj_deaths = x.Deaths/((this_pop/1000)*this_deathrate)
        else:
            adj_deaths =  x.Deaths
        impact = adj_dollars + adj_deaths
#        print(impact.dtypes)
        return pd.Series([x.DisYear,x.ISO,adj_deaths,adj_dollars,impact],index=['DisYear','ISO','AdjDeath','AdjDollarDmg','Impact'])
    return consolidated.apply(adjust, args=(set(death_df['ISO'].unique()),), axis=1)
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
    #Based on the quantity series create a frame with two columns.
    #One is the pct change with the infinities
    #The other is the pct_change where the inf = 0. As in nothing changed.
    def trendy(quant_series):
        return pd.DataFrame({'Trend':quant_series.pct_change(),'FilledTrend':quant_series.pct_change().replace(np.inf,0)})
    #Based on the filled trend series create a dataframe with a single column
    #The adjusted value of the filled trend
    def trend_adj(filled_trend):
        #For each value return the difference to the median and divide by std deviation. 
        #Like a zscore
        def adjust(value):
            return (value - filled_trend.median())/filled_trend.std()
        return pd.DataFrame({'AdjTrend':filled_trend.apply(adjust)})
    trades_copy = pd.concat([trades_copy,groupies['TradeQuantity'] \
                    .apply(trendy)],axis=1)
    trades_copy = trades_copy.dropna(subset=['FilledTrend'])
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])#Regroup for added columns
    trades_copy = pd.concat([trades_copy,groupies['FilledTrend'].apply(trend_adj)],axis=1)
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])#Regroup for added column
    return trades_copy.reset_index(drop=True)
#%%
def get_resultant_table(joined_table):
    iso_set = set(death_df['ISO'].unique())
    #Retrieves the comtrade ISO frame where the comtrade ISO is within the deathrate records
    #If so retrieve some particular columns and reset the index
    death_matches = joined_table.loc[joined_table['rt3ISO'] \
                                .apply(lambda x: x in iso_set),['cmdCode','ISO','rt3ISO','rtTitle','yr','TradeQuantity','AdjTrend','AdjDeath','AdjDollarDmg','Impact','_merge']] \
                                .reset_index(drop=True)
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
    dis_adj = adj_consolidated(consolidated_frame)
    #Regarding trades
    world_trades = get_world_trades(trades)
    trends_table = get_trends(world_trades)
    #Join the trends table from comtrade with the disaster table from emdat
    joined_table = pd.merge(trends_table,dis_adj,left_on=['yr','rt3ISO'],right_on=['DisYear','ISO'],how='left',indicator=True)
    resultant_table = get_resultant_table(joined_table)
    return resultant_table, joined_table, dis_adj, trends_table
#%%
result_frame, joined_frame, dis_adj_frame, trends_frame = do_all()