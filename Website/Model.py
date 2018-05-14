import json

import mysql.connector
import numpy
from numpy import random
from scripts import econ

class Model:

    def __init__(self):
        self.results = {}

    def update(self,params):

        if params["mode"] == "init":
            pass
        
        if params["mode"] == "calc":
            db = mysql.connector.connect(host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com", 
            user="user", passwd="notatotallysafepassword", db="Blockchain")
            code = int(params['country'])
            impact = params['score']
            cur = db.cursor()
            cur.execute('SELECT countrycode,iso3dig FROM country where countryCode = "{}";'.format(code))
            
            iso=dict(cur.fetchall()).get(code,"DEU")

            #print(code,iso)
            changes = {"1904":0,"1806":1}
            self.results = econ.getEconEffect(code,changes)
