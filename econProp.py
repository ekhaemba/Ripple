
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

    # print(database)

    cur.execute("SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA`='Blockchain' AND `TABLE_NAME`='cocoapuffs'")
    col = cur.fetchall()

    for i in range(len(col)):
        print(col[i], end=" ")
        print(database[0][i])

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
        if commodity not in commodities:
            commodities.append(commodity)

    countries = sorted(countries)
    commodities = sorted(commodities)

    #Fill two tables with input and output data
    exportQuan = []
    exportVal = []
    inportQuan = []
    inportVal = []
    for commodity in commodities:
        rowA = []
        rowB = []
        rowC = []
        rowD = []
        for country in countries:
            rowA.append(0)
            rowB.append(0)
            rowC.append(1)
            rowD.append(1)
        exportQuan.append(rowA)
        inportQuan.append(rowB) 
        exportVal.append(rowC)
        inportVal.append(rowD) 

    for i in range(len(database)):
        exOrIn = database[i][1]
        countryOne = database[i][3]
        countryTwo = database[i][5]
        commodity = database[i][7]
        quantity = database[i][6]
        # value = database[i][31]

        
        i = commodities.index(commodity)
        if exOrIn == 2:
            j = countries.index(countryTwo)
            exportQuan[i][j] += quantity
            # exportVal[i][j] +=value
        else:
            j = countries.index(countryOne)
            inportQuan[i][j] += quantity
            # inportVal[i][j] += value
        

    print(inportQuan)
    print(exportQuan)
    print(exportVal)

    return countries,commodities,inportQuan,exportQuan,inportVal,exportVal

# def econPropagation

def econPropagation(country,changes):

    #Get craftbook
    craftbook = None
    with open(craftbookFile) as json_data:
        craftbook = json.load(json_data)

    #download database
    countries,commodities,inportQuan,exportQuan,inportVal,exportVal = downloadDatabase()

    for item in changes: 

        #Apply initial change
        i = countries.index(country) 
        j = commodities.index(item)

        totalPrior = sum(exportQuan[i])
        exportQuan[i][j] *= changes[item]
        exportVal[i][j] *= changes[item]
        totalPost = sum(exportQuan[i])

        deltaQ = totalPost/totalPrior
        deltaV = 1/deltaQ

        print(item)
        print("------------")
        for i in range(len(exportVal)):
            change = str("{0:.2f}".format((exportVal[i][j]*deltaV - 1)*100))+"%"
            print(countries[i], change, sep = ": ")
        print()










# country = "Côte d'Ivoire"
country = "Belgium"
changes = {1701:0}

econPropagation(country,changes)