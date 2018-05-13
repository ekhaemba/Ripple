#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri May 11 11:22:45 2018

@author: ThisMac
"""
#%%
import pandas as pd
from config import get_trade_data
from sqlalchemy import create_engine
import mysql.connector
import numpy as np
from math import log
#%%
def eng_connector(user=None,password=None,host=None,port=None,database=None):
    engine = create_engine('mysql+mysqlconnector://{user}:{password}@{host}:{port}/{database}'.format(user=username,password=password,host=hostname,port=port,database=database), echo=False)
    cnx = engine.connect()
    return engine, cnx

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
def get_consolidated_table(dis_frame):
    unique_years = get_unique_years(emdat_df)
    sum_dis_frame = None
    for year in unique_years:
        this_year = dis_frame[dis_frame['DisYear']==year]
        unique_countries = this_year['ISO'].unique()
        for country in unique_countries:
            this_frame = this_year.loc[this_year['ISO'] == country]
            row = None
            if len(this_frame) > 1:
                result_series = this_frame[['Deaths','DollarDmg']].apply(np.sum,axis=0)#Series
                remaining_series = pd.Series([year,country],index=['DisYear','ISO'])#Series
                row = pd.concat([remaining_series,result_series])#Series
                row = pd.DataFrame(row).T#DataFrame
            else:
                row = this_frame#DataFrame
            sum_dis_frame = pd.concat([sum_dis_frame,row])
    assert(sum_dis_frame[sum_dis_frame.duplicated(['DisYear','ISO'])].empty)
    return sum_dis_frame
#%%
#Create adjusted table from consolidated table
def get_dis_adj(sum_dis_frame):
    def set_adj_dollars(x):
        return log(x.DollarDmg + 1,10)/10
    def set_adj_death_rate(x,isolist):
        inlist = x.ISO in isolist
        if inlist:
            return x.Deaths/((death_df.Population/1000)*death_df.deathRate)
        else:
            return x.Deaths
    def impact_calc(x):
        return x['AdjDeath'] + x['AdjDollarDmg']
    adj_frame = sum_dis_frame.copy()
    the_iso_list = death_df.ISO.unique()
    adj_frame.loc[:,'AdjDeath'] = sum_dis_frame.apply(set_adj_death_rate, args=(the_iso_list,) ,axis=1)#Series
    adj_frame.loc[:,'AdjDollarDmg'] = sum_dis_frame.apply(set_adj_dollars,axis=1)
    print(adj_frame.columns)
    adj_frame.loc[:,'Impact'] = adj_frame.apply(impact_calc,axis=1)
    adj_frame = adj_frame.drop(columns=['Deaths','DollarDmg'])
    return adj_frame
#%%
#
#Regarding Comtrade
#
def get_trend_table(trades,iso):
    #Get the trades where the partner is World, commodity code is not Total, the ISO is not null, the ISO is this iso
    iso_trades = trades[(trades['rgCode']==2)&(trades['ptCode']==0)&(trades['cmdCode']!=-1)&(trades['rt3ISO'].notnull())&(trades['rt3ISO'] == iso)]
    #For a given iso frame
    commodities = iso_trades.cmdCode.unique()
    trend_frame = None
    for commodity in commodities:
        this_trend = iso_trades.loc[iso_trades.cmdCode == commodity]
        #Sort ascending by year
        this_trend = this_trend.sort_values('yr')
        #Add the trend column
        this_trend.loc[:,'Trend'] = this_trend['TradeQuantity'].pct_change()
        #Drop the first record
        this_trend = this_trend.iloc[1:]
        median_trend = this_trend.Trend.median()
        std_dev = this_trend.Trend.std()
        trend = this_trend.Trend
        this_trend.loc[:,'AdjTrend'] = trend.apply(lambda x: (x-median_trend)/std_dev)
        trend_frame = pd.concat([this_trend,trend_frame])
    print("Finished ISO",iso)
    if trend_frame is not None:
        return trend_frame.drop(columns=['Trend'])
    else:
        return trend_frame
#%%
def get_all_trends(trades):
    isos = trades[(trades['rt3ISO'].notnull())].rt3ISO.unique()
    all_trends = None
    for iso in isos:
        all_trends = pd.concat([all_trends,get_trend_table(trades,iso)])
    print("Done gathering all trends")
    return all_trends
#%%
all_trends = get_all_trends(trades)
#%%
#us_trends = all_trends[all_trends.rt3ISO=='USA']
dis_adj = get_dis_adj(get_consolidated_table(get_disaster_frame(emdat_df)))
joined_table = pd.merge(all_trends,dis_adj,left_on=['yr','rt3ISO'],right_on=['DisYear','ISO'],how='left',indicator=True)
#%%
matched = joined_table[joined_table['_merge']=='both']
matched = matched[['cmdCode','ISO','rtTitle','yr','TradeQuantity','AdjTrend','AdjDeath','AdjDollarDmg','Impact']]
matched = matched.set_index(['cmdCode','ISO']).sort_index()
#%%
#commodities = matched.index.get_level_values(0).unique()
#np.random.choice(commodities,1)
