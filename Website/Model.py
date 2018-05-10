import json

import mysql.connector
import numpy
from numpy import random

craftbookFile = '../craftbook.json'

def downloadDatabase():

    # Open database
    db = mysql.connector.connect(host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com", 
    user="user", passwd="notatotallysafepassword", db="Blockchain")

    # Get all the export data
    cur = db.cursor()
    cur.execute("SELECT * FROM cocoapuffs")
    database = []
    oldTable = cur.fetchall()

    # Place in a table
    for i in range(len(oldTable)):
        row = []
        for j in range(len(oldTable[i])):

            if type(oldTable[i][j]) != str:
                row.append(oldTable[i][j])

            else:

                if oldTable[i][j][-8:] == "d'Ivoire":
                    row.append("Côte d'Ivoire")

                else:
                    row.append(oldTable[i][j])

        database.append(row)

    #Get all countries
    cur.execute("SELECT * FROM country")

    rawData = cur.fetchall()
    del rawData[0]

    countries = []
    for entry in rawData:
        countries.append(int(entry[0]))
    countries = sorted(countries)

    # Get all the commodities
    cur.execute("SELECT * FROM class")

    rawData = cur.fetchall()
    del rawData[:5]

    commodities = []
    for entry in rawData:
        commodities.append(entry[0])

    commodities = sorted(commodities)

    db.close()

    # Condense export data
    exportQuan = numpy.zeros((len(commodities),len(countries)))
    exportVal = numpy.zeros((len(commodities),len(countries)))
    totalExports = numpy.zeros(len(countries))

    for i in range(len(database)):
        exOrIn = database[i][1]
        countryOne = database[i][2]
        countryTwo = database[i][4]
        commodity = str(database[i][7])
        quantity = database[i][6]
        value = database[i][8]
        
        if commodity != "-1":
        
            i = commodities.index(commodity)
            if exOrIn == 1:
                if countryTwo in countries:
                    j = countries.index(countryTwo)
                    exportQuan[i][j] += quantity
                    exportVal[i][j] += value
            else:
                if countryOne in countries:
                    j = countries.index(countryOne)
                    if quantity != None:
                        exportQuan[i][j] += quantity
                    exportVal[i][j] += value

        else:
            if exOrIn == 2:
                year = database[i][0]
                if year == 2017:
                    j = countries.index(countryOne)
                    totalExports[j] = value

    return countries,commodities,exportQuan,exportVal,totalExports

def getUses(craftbook,commodity):

    for item in craftbook:
        if item["hs"] == commodity:
            return item["uses"]
    
    return []

def getComponents(craftbook,commodity):
    
    for item in craftbook:
        if item["hs"] == commodity:
            return item["components"]

    return []

def horizontalProp(commodities,countries,change,country,item,exportQuan):

        exportVal = numpy.ones((len(commodities),len(countries)))

        i = countries.index(country) 
        j = commodities.index(item)

        totalPrior = sum(exportQuan[j])
        exportQuan[j][i] *= change
        exportVal[j][i] *= change
        totalPost = sum(exportQuan[j])

        deltaQ = totalPost/totalPrior
        deltaV = 1/deltaQ

        for i in range(len(exportVal[0])):
            exportVal[j][i] *= deltaV

        return deltaV

def verticalProp(craftbook,item,deltaV):

    deltaQ = 1/deltaV
    # print(deltaDemand)

    visited = []
    modified = [item]
    changes = {item:deltaV}
    #Get vertical changes
    for mod in modified:

        if mod not in visited:
            visited.append(mod)

            for temp in getComponents(craftbook,mod):
                modified.append(temp)
            
            for temp in getUses(craftbook,mod):
                modified.append(temp)

            if mod != item:
                changes[mod] = deltaQ

    return changes

def propagateChanges(country,changes,countries,commodities,exportQuan):

    #Get craftbook
    craftbook = None
    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)

    #Apply each change
    modified = []
    factors = []
    for item in changes:

        change = changes[item]

        change = horizontalProp(commodities, countries, change, country, item, exportQuan)
        factors.append(verticalProp(craftbook,item,change))

    #Combine factors
    results = {}
    for factor in factors:
        for item in factor:
            results[item] = results.get(item,1) * factor[item]

    return results

def calcExportChange(countries,commodities,country,localChanges,globalChanges,exportVal,totalExports):
    
    results = {}
    for entry in countries:
        i = countries.index(entry)
        total = totalExports[i]
        newTotal = total

        for item in globalChanges:
            j = commodities.index(item)
            diff = globalChanges[item]
            if entry == country:
                diff *= localChanges.get(item,1)
            newTotal += (diff-1)*exportVal[j][i]



        if total == 0:
            newTotal = 1
            total = 1
                
        results[entry] = (newTotal/total) - 1
    
    return results

def calcImpact(country,localChanges):

    # Download database
    countries,commodities,exportQuan,exportVal,totalExports = downloadDatabase()
    globalChanges = propagateChanges(country,localChanges,countries,commodities,exportQuan)
    results = calcExportChange(countries,commodities,country,localChanges,globalChanges,exportVal,totalExports)
    return results

class Model:

    def __init__(self):
        self.results = {}

    def update(self,params):

        if params["mode"] == "init":
            pass
        
        if params["mode"] == "calc":

            country = 276
            changes = {"1701":1,"1806":0}
            self.results = calcImpact(country,changes)
            #print(self.results)
