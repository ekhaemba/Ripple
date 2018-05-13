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
def consolidate(disaster_frame):
    return disaster_frame.groupby(['DisYear','ISO'],as_index=False).sum()
#%%
#Create adjusted table from consolidated table
def adj_consolidated(consolidated):
    def adjust(x, isolist):
        adj_dollars = log(x.DollarDmg + 1,10)/10
        adj_deaths = 0
        if x.ISO in isolist:
            this_pop = death_df.loc[death_df.ISO==x.ISO,'Population']
            this_deathrate = death_df.loc[death_df.ISO==x.ISO,'deathRate']
            adj_deaths = x.Deaths/((this_pop/1000)*this_deathrate)
        else:
            adj_deaths =  x.Deaths
        impact = adj_dollars + adj_deaths
        return pd.Series([x.DisYear,x.ISO,adj_deaths,adj_dollars,impact],index=['DisYear','ISO','AdjDeath','AdjDollarDmg','Impact'])
    return consolidated.apply(adjust, args=(death_df['ISO'].unique(),), axis=1)
#%%
#
#Regarding Comtrade
#
def get_world_trades(trades):
    return trades[(trades['rgCode']==2)&(trades['ptCode']==0)&(trades['cmdCode']!=-1)&(trades['rt3ISO'].notnull())]
def get_trends(world_trades):
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
    trades_copy = pd.concat([trades_copy,groupies['TradeQuantity'].apply(trendy)],axis=1)
    trades_copy = trades_copy.dropna(subset=['FilledTrend'])
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])#Regroup for added columns
    trades_copy = pd.concat([trades_copy,groupies['FilledTrend'].apply(trend_adj)],axis=1)
    groupies = trades_copy.groupby(['rt3ISO','cmdCode'])#Regroup for added column
    return trades_copy
#%%
dis_adj = adj_consolidated(consolidate(get_disaster_frame(emdat_df)))
world_trades = get_world_trades(trades)
trends_table = get_trends(world_trades)
joined_table = pd.merge(trends_table,dis_adj,left_on=['yr','rt3ISO'],right_on=['DisYear','ISO'],how='left',indicator=True)
#%%
matched = joined_table[joined_table['_merge']=='both']
matched = matched[['cmdCode','ISO','rtTitle','yr','TradeQuantity','AdjTrend','AdjDeath','AdjDollarDmg','Impact']]
#%%

