#importing the libraries 
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression

# Some Global variables
countries = ['FRA','DEU','NGA','NLD','CIV','POL']
commodities = ['1701']
modelDatasets = importModelDatasets()
models = createModelList()

#Function Definitions
def printList(pList):
    """Tired of having to type this"""
    for l in pList:
        print(l)

def printListList(pList):
    """Tired of having to type this"""
    for l in pList:
        for ll in l:
            print(ll)

def pullItEm(file):
    dataset = pd.read_csv(file)
    dSet = []
    tempList = []
    numRows = len(dataset)
    for n in range(numRows):
        for line in dataset.iloc[n,:5]:
            tempList.append(line)
        dSet.append(tempList)
        tempList = []
    return dSet

def pullItCom(file):
    """pulls in the Comdata file"""
    dataset = pd.read_csv(file)
    dSet = []
    tempList = []
    numRows = len(dataset)
    for n in range(numRows):
        for line in dataset.iloc[n,:7]:
            tempList.append(line)
        dSet.append(tempList)
        tempList = []
    return dSet

def fixYear(dSet):
    """Fixes the year on the emdat records"""
    postSet = []
    tmpEntity = []
    for d in dSet:
        tmpEntity.append(d[0][-4:])
        tmpEntity.append(d[1])
        tmpEntity.append(d[2])
        tmpEntity.append(d[3])
        tmpEntity.append(d[4])
        postSet.append(tmpEntity)
        tmpEntity = []
    return postSet

def groupByYear(dSet):
    """combines disasters of all type to provide single year record for each country"""
    tmpCountry = dSet[0][1]
    tmpDeathSum = 0
    tmpDollarSum = 0
    tmpYear = dSet[0][0]
    tmpEntry =[]
    dSetR1 =[]

    for i in range(len(dSet)):

        if (dSet[i][0] == tmpYear) and (dSet[i][1] == tmpCountry):
            tmpDeathSum += dSet[i][3]
            tmpDollarSum += dSet[i][4]
        elif (dSet[i][0] !=tmpYear):
            tmpEntry.append(tmpYear)
            tmpEntry.append(tmpCountry)
            tmpEntry.append(tmpDeathSum)
            tmpEntry.append(tmpDollarSum)
            dSetR1.append(tmpEntry)
            tmpEntry = []
            tmpCountry = dSet[i][1]
            tmpDeathSum = dSet[i][3]
            tmpDollarSum = dSet[i][4]
            tmpYear = dSet[i][0]
                
    return(dSetR1)


def calcImpactScore(dSet):
    tmpEntry =[]
    tmpCountry = ""
    tmpYear = 0
    tmpDeath = 0
    AdjDollar = 0
    calcImpact = 0
    dSetR2 = []
    for d in dSet:
        tmpYear = d[0]
        tmpCountry = d[1]
        tmpDeath = d[2]
        if(d[3]!=0):
            AdjDollars = (np.log10(d[3]))/10
        else:
            AdjDollars = d[3]
        calcImpact = AdjDollars +tmpDeath
        tmpEntry.append(tmpYear)
        tmpEntry.append(tmpCountry)
        tmpEntry.append(tmpDeath)
        tmpEntry.append(AdjDollars)
        tmpEntry.append(calcImpact)
        dSetR2.append(tmpEntry)
        tmpEntry = []
    return dSetR2

def getComList(country,commodity):
    """Enter parameter in format 'ISO' """
    country = 'datasets/'+country+'-'+commodity+'.csv'
    return pullItCom(country)

def removeFirstComEntry(comList):
    """gets rid of countries whose adjusted trends are missing from comTrade"""
    editedList = []
    tmpEntry = []
    
    for c in comList:
        for l in c:
            if (str(l[4])==str(l[5]) and str(l[5])=='nan'):
                #print("edit out")
                pass
            else:
                tmpEntry.append(l)
        editedList.append(tmpEntry)
        tmpEntry = []
        
    return editedList

def getComLists(countries,commodity):
    """be sure to use parameter in format ['ISO1','ISO2,...,'ISOn']"""
    l = len(countries)
    comLists = []
    for c in range(l):
        country = countries[c]
        comLists.append(getComList(country,commodity))
    return removeFirstComEntry(comLists)

def getDeathRate():
    file = open('datasets/deathrate.txt','r')
    rawLines = []
    tmpList = []
    deathList = []
    tmpEntry = []
    tmpString = ""
    for line in file:
        rawLines.append(line.strip())
    for l in rawLines:
        if (l[:3] in countriesSoFar):
            for char in range(len(l)):
                if l[char] ==":":
                    tmpEntry.append(tmpString)
                    tmpString = ""
                if l[char] == "/":
                    tmpEntry.append(tmpString.lstrip(':'))          
                    tmpString = ""
                if char == len(l)-1:
                    tmpString += l[char]
                    tmpEntry.append(tmpString.lstrip('/'))               
                    tmpString = "" 
                else:
                    tmpString += l[char]
            tmpList.append(tmpEntry)
            tmpEntry = []

    return tmpList

def calcDeathRate():
    numDeadList = []
    tmpEntry = []
    deathList = getDeathRate()
    for d in deathList:
        pop = int(d[1])
        rate = float(d[2])
        tmpEntry.append(d[0])
        tmpEntry.append(((pop/1000)*rate)*10)
        numDeadList.append(tmpEntry)
        tmpEntry = []
    return numDeadList

def applyDeathRate(emDat,deathList):
    tmpList = []
    tmpEntry = []
    dr = 1
    for n in emDat:
        for d in deathList:
            if (d[0] == n[1]):
                dr = d[1]
        tmpEntry.append(n[0])
        tmpEntry.append(n[1])
        tmpEntry.append(n[2]/dr)
        tmpEntry.append(n[3])
        
        tmpList.append(tmpEntry)
        tmpEntry = []
    return tmpList

def processEmdat():
    emDat = pullItEm('datasets/emdata.csv')
    emDat = fixYear(emDat)
    emDat = groupByYear(emDat)
    deathRate = calcDeathRate()
    emDat = applyDeathRate(emDat,deathRate)
    emDat = calcImpactScore(emDat)
    return emDat

def combineComEm(comList,emDat):
    titleString = ['YEAR','ISO','COMMODITY', 'TREND', 'ADJUSTED TREND', 'ADJUSTED DEATH', 'ADJUSTED $ LOSS', 'CIS' ]
    tmpEntry = []
    tmpList = []
    tmpList.append(titleString)
    for country in comList:
        comName = country[0][1]
        comComm = country[0][2]

        for comLine in country:
            comYear = str(comLine[0])
            comExpo = comLine[3]
            comTrnd = comLine[4]
            comAdTd = comLine[5]
            for e in emDat:
                emYear = e[0]
                emName = e[1]
                emDeath = e[2]
                emDollar = e[3]
                emImp = e[4]
                if (e[0] == comYear and comName == emName):
                    #print('match')
                    tmpEntry.append(comYear)
                    tmpEntry.append(comName)
                    tmpEntry.append(comComm)
                    tmpEntry.append(comExpo)
                    tmpEntry.append(comTrnd)
                    tmpEntry.append(comAdTd)
                    tmpEntry.append(emDeath)
                    tmpEntry.append(emDollar)
                    tmpEntry.append(emImp)
                    tmpList.append(tmpEntry)
                    tmpEntry = []

    return tmpList

def doTheDamnThingHR(countries,commodity):
    comList = getComLists(countries,commodity)
    emDat = processEmdat()
    result = combineComEm(comList,emDat)
    filename = 'datasets/humanReadable/'+'HR-'+commodity+'.csv'
    writeThisBitchOut(result,filename)
    return result

def doTheDamnThingMDL(countries,commodity):
    record = doTheDamnThingHR(countries,commodity)
    numCountries = (-1)
    currCountry = ""
    tmpList = []
    tmpHeaders = []
    tmpEntry = []
    for line in record:
         if (line[1] != currCountry):
                numCountries += 1
                currCountry = line[1]
                if (currCountry != 'ISO'):
                    tmpHeaders.append(currCountry)
    tmpHeaders.append('Impact Score')
    tmpHeaders.append('Adjusted Trend')
    tmpList.append(tmpHeaders)
    for line in record:
        if (record.index(line) != 0):
            for h in tmpHeaders[:6]:
                if (line[1] == h):
                    tmpEntry.append(1)
                else:
                    tmpEntry.append(0)
            tmpEntry.append(line[7])
            tmpEntry.append(line[4])
            tmpList.append(tmpEntry)
            tmpEntry = []
    filename = 'datasets/modelIn/'+'model-'+commodity+'.csv'
    writeThisBitchOut(tmpList,filename)
    return tmpList

def doTheDamnThings(countries,commodities):
    for c in commodities:
        doTheDamnThingMDL(countries,c)

def writeThisBitchOut(dSet,filename):
    file = open(filename,'w')
    tmpString = ""
    for line in dSet:
        for l in line:
            tmpString += str(l)
            tmpString += ','
        tmpString = tmpString[:-1]
        file.write(tmpString+'\n')
        tmpString = ""
    file.close()
    return True

def importModelDatasets():
    dSets = []
    tmpDS = None
    filename = ''
    for c in commodities:
        filename = '/Users/jasonreynolds/Documents/School/2018S/CPEG657/Project/gitFolder/Ripple/disasterModels/datasets/modelIn/model-'+c+'.csv'
        tmpDS = pd.read_csv(filename)
        dSets.append(tmpDS)
        tmpDS = None
        filename =''
    return dSets

def getInsOuts(dSet):
    inputs = dSet.iloc[:,:-1].values
    outputs = dSet.iloc[:,-1].values
    return inputs,outputs

def splitTrainTest(inputs,outputs):
    inputTrain, inputTest, outputTrain, outputTest = train_test_split(inputs,outputs,test_size = 0.2)
    return inputTrain, inputTest, outputTrain, outputTest

def regress(inputTrain,outputTrain):
    regressor = LinearRegression()
    regressor.fit(inputTrain,outputTrain)
    return regressor

def predict(arg):
    predictList = []
    resultDict = {'commodity':'change'}
    for m in models:
        predictList.append(m.predict(arg))
    for c in commodities:
        resultDict[c] = predictList[commodities.index(c)][0]
    return resultDict

def createModelList():
    tmpI = []
    tmpO = []
    regs = []
    for m in modelDatasets:
        tmpI,tmpO = getInsOuts(m)
        iTr,iT,oTr,oT = splitTrainTest(tmpI,tmpO)
        regs.append(regress(iTr,oTr))
    return regs

def inputFunc(country, intensity):
    headers = []
    entry = []
    for c in countries:
        headers.append(c)
    headers.append('intensity')
    for h in headers[:-1]:
        if country == h:
            entry.append(1)
        else:
            entry.append(0)
    entry.append(intensity)
    result = []
    result.append(entry)
    result = np.asarray(result)
    return result    

def runIt(c,i):
    q = inputFunc(c,i)
    r = predict(q)
    return r