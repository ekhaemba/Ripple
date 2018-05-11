
# coding: utf-8

# In[1]:


import sys
#get_ipython().system(u'{sys.executable} -m pip install mysql-connector sqlalchemy')
import pandas as pd
import mysql.connector
from sqlalchemy import create_engine
from .config import *
from IPython.display import display


# In[2]:


def split_dates(frame):
    dates = frame.DisDate
    split_dates = dates.apply(lambda x: x.split('/'))
    years_only = split_dates.apply(lambda x: not x[0] and not x[1])
    months_only = split_dates.apply(lambda x: not x[0] and not not x[1])
    full_dates = split_dates.apply(lambda x: all(x))
    #Accurate to years only, months only and days only respectively
    return frame[years_only], frame[months_only], frame[full_dates]


# In[3]:


def is_date(row,year=None,month=None,day=None):
    retVal = True
    if year:
        retVal = retVal and row['DisDate'].split('/')[2] == str(year)
    if month:
        retVal = retVal and row['DisDate'].split('/')[1] == str(month).zfill(2)#Zero-Padding
    if day:
        retVal = retVal and row['DisDate'].split('/')[0] == str(day).zfill(2)#Zero-Padding
    return retVal

# # Prunes the columns from the comtrade API

# In[ ]:


def prune_columns(frame):
  important_columns = ['yr','rgCode', 'rtCode','rtTitle', 'ptCode', 'ptTitle', 'TradeQuantity', 'cmdCode', 'TradeValue']
  frame = frame[important_columns]
  frame['cmdCode'] = pd.to_numeric(frame['cmdCode'], errors='coerce', downcast='integer')
  frame.loc[frame['cmdCode'].isna(),'cmdCode'] = -1
  frame.cmdCode = frame.cmdCode.astype(int)
  return frame


# In[ ]:


def eng_connector(user=None,password=None,host=None,port=None,database=None):
    engine = create_engine('mysql+mysqlconnector://{user}:{password}@{host}:{port}/{database}'.format(user=username,password=password,host=hostname,port=port,database=database), echo=False)
    cnx = engine.connect()
    return engine, cnx


# In[ ]:


def get_trade_data(connector, query="select * from trades"):
    all_data = pd.read_sql(query,connector)
    #Converts the cmdCode series to the integer datatype
    all_data.cmdCode = pd.to_numeric(all_data.cmdCode,downcast='integer',errors='coerce')
    #Assert all of the cmdCodes are not null after attempting to cast them
    assert(all(all_data.cmdCode.notnull()))
    return all_data


# In[ ]:


def upload_db(frame,con,table='trades',if_exists='append'):
  frame.to_sql(name=table, con=con, if_exists=if_exists, index=False) #if_exists 'append' or 'replace'


# In[ ]:


def getTrend(frame, country, commodity):
    return frame.loc[(frame['rt3ISO']==country)&(frame['cmdCode']==commodity)&(frame['ptCode']==0)&(frame['rgCode']==2),['yr','rt3ISO','cmdCode','TradeQuantity']]


# In[ ]:


def get_trend_table(iso,commodity):
    engine, con = eng_connector(user=username,password=password,host=hostname,port=port,database=database)
    trades = get_trade_data(con)
    country_isos = list(trades.rt3ISO.unique())
    commodities = list(trades.cmdCode.unique())
    assert iso in country_isos,"This iso isn't within the list of isos:"+str(iso)
    assert commodity in commodities,"This commodity isn't within the list of commodities:"+str(commodity)
    return getTrend(trades,iso,commodity)

def get_wld_comm(iso):
    engine, con = eng_connector(user=username,password=password,host=hostname,port=port,database=database)
    trades = get_trade_data(con)
    return trades.loc[(trades['ptCode']==0)&(trades['rt3ISO']==iso)]
