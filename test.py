
import mysql.connector
from Website.scripts.econ import getEconEffect

def getYearOverYear(query):

    query = list(reversed(query))

    data = []
    for i in range(len(query)-1):

        if query[i][0] == query[i+1][0] + 1:
            data.append((query[i][0],query[i][1]/query[i+1][1]))

    return data

host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com"
user="user"
passwd="notatotallysafepassword"
database="Blockchain"

country = "76"
commodity = "1701"

db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
cur = db.cursor()

cmd = ("SELECT yr,TradeQuantity FROM Blockchain.trades where rtCode=%s and cmdCode=%s;")%(country,commodity)
cur.execute(cmd)
rawData = cur.fetchall()

data = getYearOverYear(rawData)

usable = []
for entry in data:

    if entry[1] < 1:
        usable.append(entry)
print(usable)

print(getEconEffect(country,{commodity:0.5373755201654001})[276])

country = "276"
commodity = "1806"

db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
cur = db.cursor()

cmd = ("SELECT yr,TradeQuantity FROM Blockchain.trades where rtCode=%s and cmdCode=%s;")%(country,commodity)
cur.execute(cmd)
rawData = cur.fetchall()

print(getYearOverYear(rawData))

