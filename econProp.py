
import json
import mysql.connector

craftbookFile = 'craftbook.json'

def downloadDatabase():

    db = mysql.connector.connect(host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com", 
    user="user", passwd="notatotallysafepassword", db="Blockchain")

    cur = db.cursor()
    cur.execute("SELECT * FROM cocoapuffs")
    database = []
    oldTable = cur.fetchall()

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

    db.close()

    #Get all the counrties and commodities
    countries = []
    commodities = []

    for i in range(len(database)):
        exOrIn = database[i][1]
        countryOne = database[i][3]
        countryTwo = database[i][5]
        commodity = database[i][7]

        if countryOne not in countries:
            countries.append(countryOne)
        if countryTwo not in countries:
            countries.append(countryTwo)
        if int(commodity) not in commodities:
            commodities.append(int(commodity))

    countries = sorted(countries)
    commodities = sorted(commodities)

    #Fill two tables with input and output data
    exportQuan = []
    exportVal = []
    for commodity in commodities:
        rowA = []
        rowB = []
        for country in countries:
            rowA.append(0)
            rowB.append(1)
        exportQuan.append(rowA)
        exportVal.append(rowB)

    for i in range(len(database)):
        exOrIn = database[i][1]
        countryTwo = database[i][5]
        commodity = database[i][7]
        quantity = database[i][6]

        
        i = commodities.index(int(commodity))
        if exOrIn == 2:
            j = countries.index(countryTwo)
            exportQuan[i][j] += quantity

    return countries,commodities,exportQuan,exportVal

def getUses(craftbook,commodity):

    for item in craftbook:
        if item["hs"] == commodity:
            return item["uses"]

def getComponents(craftbook,commodity):
    
    for item in craftbook:
        if item["hs"] == commodity:

            results = item["components"]
            components = []
            # ratio = []

            for i in range(len(results)):
                components.append(results[i][0])
                # ratio.append(results[i][1])

            return components

def verticalProp(craftbook,item,change):

    visited = []
    modified = [item]
    changes = {item:change}
    #Get vertical changes
    for mod in modified:

        if mod not in visited:
            visited.append(mod)

            for item in getComponents(craftbook,mod):
                changes[item] = changes[mod]
                modified.append(item)
            
            for item in getUses(craftbook,mod):
                changes[item] = changes[mod]
                modified.append(item)

    return changes

def econPropagation(country,changes):

    #Get craftbook
    craftbook = None
    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)

    #Make initial horizontal changes
    modified = []
    factors = []
    for item in changes:

        change = changes[item]

        #download database
        countries,commodities,exportQuan,exportVal = downloadDatabase()

        i = countries.index(country) 
        j = commodities.index(item)

        totalPrior = sum(exportQuan[j])
        exportQuan[j][i] *= change
        exportVal[j][i] *= change
        totalPost = sum(exportQuan[j])

        deltaQ = totalPost/totalPrior
        deltaV = 1/deltaQ

        change = deltaQ
        

        for i in range(len(exportVal[0])):
            exportVal[j][i] *= change

        factors.append(verticalProp(craftbook,item,change))

    #Combine factors
    results = {}
    for factor in factors:
        for item in factor:
            results[item] = results.get(item,1) * factor[item]

    #Get deltaV
    for item in results:
        results[item] = 1/results[item]


    # print(factors)
    print(results)


# country = "Côte d'Ivoire"
country = "Germany"
changes = {1801:1,1804:.5}

econPropagation(country,changes)