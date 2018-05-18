
import json
import numpy
import mysql.connector

craftbookFile = "../craftbookNew.json"

host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com"
user="user"
passwd="notatotallysafepassword"
database="Blockchain"

def getUses(commodity):

    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)

    item = craftbook[commodity]
    return item["uses"]

def getComponents(commodity):

    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)
    
    item = craftbook[commodity]
    return item["components"]

    return []

def getCountries():

    db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
    cur = db.cursor()

    cur.execute("SELECT countryCode FROM Blockchain.country;")
    rawData = cur.fetchall()
    data = list(map(sum, rawData))

    db.close()

    return data

def getTotalExports():

    db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)

    # Get all the export data
    cur = db.cursor()
    cmd = ("SELECT rtCode,TradeValue FROM Blockchain.trades where cmdCode = %s;")%(-1)
    cur.execute(cmd)
    rawData = cur.fetchall()
    
    totalExports = {}
    for entry in rawData:
        country = entry[0]
        value = entry[1]
        totalExports[country] = max(totalExports.get(country,0),value)

    return totalExports

def getCommodityExports(commodities):

    db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
    cur = db.cursor()

    exportsByCommodity = {}

    for commodity in commodities:
        cmd = "SELECT rtCode,TradeValue FROM Blockchain.trades where cmdCode = %s;"%(commodity)
        cur.execute(cmd)
        rawData = cur.fetchall()

        temp = {}
        for entry in rawData:
            country = entry[0]
            value = entry[1]
            temp[country] = max(temp.get(country,0),value)

        exportsByCommodity[commodity] = temp

    return exportsByCommodity

#Takes in shift and commoditiy and uses equation 1 to calculate new price
def getScarcityEffect(supplyShift,commodity):

    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)
    
    commodityDemandElasticity = craftbook[commodity]["demandElasticity"]
    return supplyShift**(1/commodityDemandElasticity)

def getDemandShift(demandShift, commodity):

    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)
    
    commodityDemandElasticity = craftbook[commodity]["demandElasticity"]
    commoditySupplyElasticity = craftbook[commodity]["supplyElasticity"]

    return demandShift**(1/(commoditySupplyElasticity- commodityDemandElasticity))

def applyDisaterExportChange(change,item,country):

    db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
    cur = db.cursor()

    #Get most recent year
    cur.execute("SELECT MAX(yr) FROM Blockchain.trades;")
    mostRecent = cur.fetchall()[0][0]

    #Get impacted trade quantity of the specified commodity
    command = ("SELECT TradeQuantity FROM Blockchain.trades where rtCode = %s and cmdCode = %s and yr = %s;")%(country,item,mostRecent)
    cur.execute(command)
    quantity = cur.fetchall()[0][0]

    command = ("SELECT TradeQuantity FROM Blockchain.trades where cmdCode = %s and yr = %s;")%(item,mostRecent)
    cur.execute(command)
    data = cur.fetchall()
    initTotal = sum(map(sum, data))

    db.close()

    finalTotal = initTotal + quantity*(change-1)
    deltaQ = finalTotal/initTotal
    deltaV = getScarcityEffect(deltaQ,item)

    return deltaQ

def getSingleQuanChanges(deltaQ,initialItem):
    
    #Get all commoddities that rely on affected commodity
    visited = []
    queue = [initialItem]

    for item in queue:

        if item not in visited:
            visited.append(item)

            for temp in getUses(item):
                queue.append(temp)
                # quanChanges[temp] = deltaQ

    #Get all commodities that depend on queued values
    modified = set()
    queue = visited[:]
    visited = []
    
    for item in queue:

        if item not in visited:
            visited.append(item)

            components = getComponents(item)
            for temp in components:
                queue.append(temp)

        if item not in modified:
            modified.add(item)
            
    quanChanges = {}

    # Get raw resources and apply initial supply change
    raw = set()
    for item in modified:
        if getComponents(item) == []:
            uses = set(getUses(item))
            effectedUses = modified.intersection(uses)
            usageRatio = len(effectedUses)/len(uses)
            if usageRatio == 1:
                quanChanges[item] = deltaQ
            else:
                quanChanges[item] = usageRatio*(1+deltaQ)
            raw.add(item)

    queue = list(raw)[:]

    for item in queue:
        uses = set(getUses(item))
        effectedUses = modified.intersection(uses)

        for use in effectedUses:
            if use not in queue:
                queue.append(use)

            usageRatio = len(uses)/len(effectedUses)
            if usageRatio == 1:
                quanChanges[use] = quanChanges[item]
            else:
                quanChanges[use] = usageRatio - usageRatio*quanChanges[item]

    return quanChanges

def getAllQuanChanges(disasterChanges,groundZero):

    quanChanges = {}
    for item in disasterChanges:
    
        change = disasterChanges[item]
        deltaQ = applyDisaterExportChange(change,item,groundZero)
        singleChanges = getSingleQuanChanges(deltaQ,item)

        for temp in singleChanges:
            quanChanges[temp] = min(singleChanges[item],quanChanges.get(item,1))

    return quanChanges

def getPriceChanges(quantityChanges,initalChanges):

    priceChanges = {}

    for item in quantityChanges:
        if item in initalChanges:
            priceChanges[item] = getScarcityEffect(quantityChanges[item],item)
        else:
            priceChanges[item] = getDemandShift(quantityChanges[item],item)

    return priceChanges

def getCostChanges(priceChanges):

    costChanges = {}
    commodities = []

    queue = set()
    for item in priceChanges:
        queue.add(item)

    while len(queue) > 0:
        item = queue.pop()
        if item not in commodities:
            commodities.append(item)

            for temp in getComponents(item):
                queue.add(temp)
            
            for temp in getUses(item):
                queue.add(temp)

    for item in commodities:
        components = getComponents(item)
        if components == []:
            costChanges[item] = 1

        else:
            cost = 0
            for component in components:
                cost += priceChanges.get(component,1)

            costChanges[item] = cost/len(components)
                

    return costChanges

def getEconEffect(groundZero,disasterChanges):

    quanChanges = getAllQuanChanges(disasterChanges,groundZero)
    priceChanges = getPriceChanges(quanChanges,disasterChanges)
    costChanges = getCostChanges(priceChanges)

    exportsByCommodity = getCommodityExports(quanChanges)
    totalExports = getTotalExports()

    exportChanges = {}
    for country in getCountries():
        exportChanges[country] = 1
        for commodity in quanChanges:

            commodityChange = quanChanges[commodity]*priceChanges[commodity]/costChanges[commodity]
            if country == groundZero:
                commodityChange = disasterChanges.get(commodity,1)**priceChanges[commodity]/costChanges[commodity]

            exportChanges[country] -= commodityChange*exportsByCommodity.get(commodity,{}).get(country,0)/totalExports.get(country,1)

    for country in exportChanges:
        exportChanges[country] += -1

    return exportChanges



# print(getEconEffect("276",{"1904":.9,"1804":.75}))