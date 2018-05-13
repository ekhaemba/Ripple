# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import pandas as pd
from config import get_trade_data, upload_db
import mysql.connector
from mysql.connector.errors import IntegrityError
from sqlalchemy import create_engine , exc

def prune_columns(frame):
  important_columns = ['yr','rgCode', 'rtCode','rtTitle', 'rt3ISO', 'ptCode', 'ptTitle', 'pt3ISO', 'TradeQuantity', 'cmdCode', 'TradeValue']
  frame = frame[important_columns]
  frame['cmdCode'] = pd.to_numeric(frame['cmdCode'], errors='coerce', downcast='integer')
  frame.loc[frame['cmdCode'].isna(),'cmdCode'] = -1
  frame.loc[frame['TradeQuantity'].isna(),'TradeQuantity'] = 0
  frame.cmdCode = frame.cmdCode.astype(int)
  assert(frame['cmdCode'].notnull().all())
  assert(frame['TradeQuantity'].notnull().all())
  return frame

def clean_df_db_dups(df, tablename, engine, dup_cols=[],
                         filter_continuous_col=None, filter_categorical_col=None):
    """
    Remove rows from a dataframe that already exist in a database
    Required:
        df : dataframe to remove duplicate rows from
        engine: SQLAlchemy engine object
        tablename: tablename to check duplicates in
        dup_cols: list or tuple of column names to check for duplicate row values
    Optional:
        filter_continuous_col: the name of the continuous data column for BETWEEEN min/max filter
                               can be either a datetime, int, or float data type
                               useful for restricting the database table size to check
        filter_categorical_col : the name of the categorical data column for Where = value check
                                 Creates an "IN ()" check on the unique values in this column
    Returns
        Unique list of values from dataframe compared to database table
    """
    args = 'SELECT %s FROM %s' %(', '.join(['{0}'.format(col) for col in dup_cols]), tablename)
    args_contin_filter, args_cat_filter = None, None
    if filter_continuous_col is not None:
        if df[filter_continuous_col].dtype == 'datetime64[ns]':
            args_contin_filter = """ "%s" BETWEEN Convert(datetime, '%s')
                                          AND Convert(datetime, '%s')""" %(filter_continuous_col,
                              df[filter_continuous_col].min(), df[filter_continuous_col].max())


    if filter_categorical_col is not None:
        args_cat_filter = ' "%s" in(%s)' %(filter_categorical_col,
                          ', '.join(["'{0}'".format(value) for value in df[filter_categorical_col].unique()]))

    if args_contin_filter and args_cat_filter:
        args += ' Where ' + args_contin_filter + ' AND' + args_cat_filter
    elif args_contin_filter:
        args += ' Where ' + args_contin_filter
    elif args_cat_filter:
        args += ' Where ' + args_cat_filter

    df.drop_duplicates(dup_cols, keep='last', inplace=True)
    df = pd.merge(df, pd.read_sql(args, engine), how='left', on=dup_cols, indicator=True)
    df = df[df['_merge'] == 'left_only']
    df.drop(['_merge'], axis=1, inplace=True)
    return df

df_iter = pd.read_csv("~/Ripple/ivorycoast_export.csv",chunksize=10000,encoding = "ISO-8859-1")

#result = eng.execute("SELECT yr, rtCode, ptCode, cmdCode, COUNT(*) FROM trades GROUP BY yr, rtCode, ptCode, cmdCode HAVING COUNT(*) > 1")
#eng.execute("ALTER IGNORE TABLE trades ADD UNIQUE INDEX id (yr, rtCode, ptCode, cmdCode, rgCode);")
frame = get_trade_data()
# =============================================================================
# german_recs = frame[frame['rtTitle']=='Germany']
# usa_recs = frame[frame['rtTitle']=='USA']
# dutch_recs = frame[frame['rtTitle']=='Netherlands']
# =============================================================================

# =============================================================================
# dup_cols = dup_cols=['yr','rtCode','ptCode','cmdCode']
# tablename='trades'
# chunk_count = 0
# my_frame = None
# for frame in df_iter:
#     my_frame = pd.concat([prune_columns(frame),my_frame])
#     chunk_count += 1
#     print("Successfully added",chunk_count)
# clean_frame = clean_df_db_dups(my_frame,tablename,eng,dup_cols=dup_cols)
# upload_db(clean_frame,'trades',con,if_exists='append')
# print("Uploaded")
# =============================================================================
