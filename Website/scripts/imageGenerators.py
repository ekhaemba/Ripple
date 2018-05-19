from matplotlib import pyplot as plt
import numpy as np
import mysql.connector
from econ import getEconEffect
# from View import * 
from PIL import Image

host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com"
user="user"
passwd="notatotallysafepassword"
database="Blockchain"

def generateLegend():

    width = 200
    height = 15
    colors = 3

    a = np.random.rand(height,width,colors)
    for i in range(width):
        change = 2*i/width-1
        for j in range(height):
            a[j][i][0] = red(change)
            a[j][i][1] = green(change)
            a[j][i][2] = 0

    im_out = Image.fromarray(a.astype('uint8')).convert('RGB')
    im_out.save('legend.jpg')

def generateZoomLegend():

    width = 200
    height = 15
    colors = 3

    a = np.random.rand(height,width,colors)
    for i in range(width):
        change = (2*i/width-1)/10
        for j in range(height):
            a[j][i][0] = red(change)
            a[j][i][1] = green(change)
            a[j][i][2] = 0

    im_out = Image.fromarray(a.astype('uint8')).convert('RGB')
    im_out.save('legendZoom.jpg')

def getYearOverYear(query):

    query = list(reversed(query))

    data = []
    for i in range(len(query)-1):

        if query[i][0] == query[i+1][0] + 1:
            try:
                data.append((query[i][0],query[i][1]/query[i+1][1]))
            except:
                pass

    return data

def getImpactYOY(country,commodity):

    db = mysql.connector.connect(host=host,user=user,passwd=passwd,db=database)
    cur = db.cursor()

    cmd = ("SELECT yr,TradeQuantity FROM Blockchain.trades where ptCode = 0 and rtCode=%s and cmdCode=%s;")%(country,commodity)
    cur.execute(cmd)
    rawData = cur.fetchall()
    db.close()

    return getYearOverYear(rawData)

def getImpactYOYDict(country,commodity):

    yoy = getImpactYOY(country,commodity)

    newYOY = {}
    for entry in yoy:
        newYOY[entry[0]] = entry[1]

    return newYOY

def getYOYLoses(yoy):

    usable = []
    for entry in yoy:

        if entry[1] < 1:
            usable.append(entry)

    return usable

def scarcityPlot():

    quan = demand = np.arange(.2,10,.01)
    quan1 = supply1 = np.arange(.2,3,.01)


    demand = quan**-.25
    supply1 = .07*quan1
    supply2 = np.arange(.23,1.56,.1)
    supply3 = .07*quan
    quan2 = [3]*len(supply2)

    fig, ax = plt.subplots( nrows=1, ncols=1 )
    # fig.add_axes([0,0,1,1])

    plt.plot(quan,demand,color = "r", linewidth=6, label="Demand")
    plt.plot(quan1, supply1, color = "b", linewidth=6, label="Supply")
    plt.plot(quan2,supply2,color = "b", linewidth=6)
    plt.plot(quan,supply3,color = "b", linewidth=3, linestyle="--")

    plt.legend(loc='upper right')
    plt.title("Scarcity Curve", fontsize = 20)

    plt.xlabel('Quantity', fontsize=14)
    plt.ylabel('Price', fontsize=14)

    ax.set_yticklabels([])
    ax.set_xticklabels([])

    # plt.show()

    fig.savefig('ScarcityCurve.png')
    plt.close(fig)

def normalPlot():
    
    quan = demand = np.arange(.2,10,.01)
    demand = quan**-.25
    supply1 = .15*quan
    supply2 = .15*quan + .3
    
    fig, ax = plt.subplots( nrows=1, ncols=1 )
    # fig.add_axes([0,0,1,1])

    plt.plot(quan,demand,color = "r", linewidth=6, label="Demand")
    plt.plot(quan, supply1, color = "b", linewidth=6, label="Supply")
    plt.plot(quan, supply2, color = "b", linestyle='-', linewidth=6)

    plt.legend(loc='upper right')
    plt.title("Normal Curve", fontsize = 20)

    plt.xlabel('Quantity', fontsize=14)
    plt.ylabel('Price', fontsize=14)

    ax.set_yticklabels([])
    ax.set_xticklabels([])

    fig.savefig('NormalCurve.png')
    plt.close(fig)

def correlationPlot():

    testPairs = {"76":"1701","276":"1806","56":"1804","384":"1804","842":"1001"}
    predicted = []
    reality = []

    for groundZero in testPairs:

        print(groundZero)

        testData = getYOYLoses( getImpactYOY(groundZero,testPairs[groundZero]) )

        for test in testData:
            year = test[0]
            alpha = test[1]

            for effectedLoc in testPairs:
                if groundZero != effectedLoc:
                    realYOY = getImpactYOYDict(effectedLoc,testPairs[effectedLoc]) 
                    prediction = getEconEffect(groundZero,{testPairs[groundZero]:alpha},int(effectedLoc),testPairs[effectedLoc])
                    
                    
                    try:
                        if type(prediction) == float:
                            reality.append(realYOY[year])
                            predicted.append(prediction)
                    except:
                        pass

    rsq = np.corrcoef(predicted,reality)[0,1]**2
    print(rsq)

    fig, ax = plt.subplots( nrows=1, ncols=1 )

    plt.title("Reality vs Predicted", fontsize = 20)
    plt.xlabel('Predicted', fontsize=14)
    plt.ylabel('Reality', fontsize=14)

    z= np.polyfit(predicted,reality,1)
    p = np.poly1d(z)
    xp = np.linspace(.6, 1, 100)
    plt.plot(xp,p(xp))

    plt.scatter(predicted,reality)

    fig.savefig('RealityVsPredicted.png')
    plt.close(fig)

# normalPlot()
# scarcityPlot()
correlationPlot()


