########################################################################
#importing the libraries 
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression
from sklearn.linear_model import RANSACRegressor

from emdata_parsing import get_trend_table as gtt

########################################################################
# Some Global variables
countries = ['FRA','DEU','NGA','NLD','CIV','POL','USA']
commodities = ['1001','1701','1801','1804']#,'1904','1806'

########################################################################
#Function Definitions
def printList(pList):
    """
    Description:
    Parameter(s):
    Returns:
    """
    for l in pList:
        print(l)

def printListList(pList):
    """
    Description:
    Parameter(s):
    Returns:
    """
    for l in pList:
        for ll in l:
            print(ll)
            
########################################################################
#EMDAT Functions
def pullItEm(file):
    """
    Description:
    Parameter(s):
    Returns:
    """
    print("pulling disaster data...")
    dataset = pd.read_csv(file)
    dSet = []
    tempList = []
    numRows = len(dataset)
    for n in range(numRows):
        for line in dataset.iloc[n,:5]:
            tempList.append(line)
        dSet.append(tempList)
        tempList = []
    print("disaster data pulled...")
    return dSet

def fixYear(dSet):
    """
    Description: Corrects the format of the 'year' cell on the EMDATA sheet
    Parameter(s):dSet, the multidimensional array (EMDAT data)
    Returns: postSet, the corrected multidimensional array (EMDAT data)
    """
    print("correcting EMDAT years...")
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
    print("EMDAT years corrected...")
    return postSet

def groupByYear(dSet):
    """
    Description:combines disasters of all type to provide single year record for each country
    Parameter(s): dSet
    Returns:dSetR1
    """    
    
    print("grouping disasters by year...")
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
    print("EMDAT disasters now grouped by year.")
    return(dSetR1)

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
        if (l[:3] in countries):
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

def calcImpactScore(dSet):
    print("Calculating disaster impact scores...")
    tmpEntry =[]
    tmpCountry = ""
    tmpYear = 0
    tmpDeath = 0
    AdjDollars = 0
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
    print("Calculating disaster impact scores completed.")        
    return dSetR2

def processEmdat():
    emDat = pullItEm('datasets/emdata.csv')
    emDat = fixYear(emDat)
    emDat = groupByYear(emDat)
    deathRate = calcDeathRate()
    emDat = applyDeathRate(emDat,deathRate)
    emDat = calcImpactScore(emDat)
    return emDat

########################################################################
# ComTrade Functions
def pullItCom(file):
    """
    Description:
    Parameter(s):
    Returns:
    """
    try:
        dataset = pd.read_csv(file)
    except:
        print("ERROR:pullItCom("+file+")")    
        
        pass
    dSet = []
    tempList = []
    numRows = len(dataset)
    for n in range(numRows):
        for line in dataset.iloc[n,:7]:
            tempList.append(line)
        dSet.append(tempList)
        tempList = []
    return dSet

def removeFirstComEntry(comList):
    """gets rid of countries whose adjusted trends are missing from comTrade"""
    editedList = []
    tmpEntry = []
    
    for c in comList:
        for l in c:
            if (str(l[4])==str(l[5]) and str(l[5])=='nan'):
                print("edit out")
                pass
            else:
                tmpEntry.append(l)
        editedList.append(tmpEntry)
        tmpEntry = []
    if(len(editedList)==0):
        print("ZERO SIZE LIST"+comList[0][1])
    return editedList

#DEPRECATED
def getComList(country,commodity):
    """
    Description:
    Parameter(s):country (string, three letter ISO code), commodity(string,HS code)
    Returns:
    """    
    country = 'datasets/'+country+'-'+commodity+'.csv'
    return pullItCom(country)

def getComLists(countries,commodity):
    """be sure to use parameter in format ['ISO1','ISO2,...,'ISOn']"""
    comLists = []
    for c in countries:#range(l):
        comLists.append(getComList(c,commodity))
        #comLists.append(pullAndGenComList(c,commodity))
    return removeFirstComEntry(comLists)

def pullAndGenComList(iso,com):
    print("Pulling COMLIST:"+iso+"-"+str(com)+"...")
    ds = gtt(iso,com)    
    tmpList = []
    tmpEntry =[]
    numRows = len(ds)
    tmpTrend = None
    tmpTrendAdj = None
    trendList = []

    for line in range(numRows):
        tmpEntry.append(ds.iloc[line,0])
        tmpEntry.append(ds.iloc[line,1])
        tmpEntry.append(ds.iloc[line,2])
        tmpEntry.append(np.log10(ds.iloc[line,3]))
    
        if line !=0:
            tmpTrend = ds.iloc[line,3]/ds.iloc[line-1,3]
            tmpEntry.append(tmpTrend)
            trendList.append(tmpTrend)
        else:
            tmpTrend = None
            tmpEntry.append(tmpTrend)
                
        tmpList.append(tmpEntry)
        tmpEntry = []
        
    med = np.median(trendList)
#    ave = np.average(trendList)
    std = np.std(trendList)
    
    dSetOut = []
    for line in range(len(tmpList)):
        if line != 0:
            tmpEntry = []
            tmpTrendAdj = (tmpList[line][-1]-med)/std
            for n in range(5):
                tmpEntry.append(tmpList[line][n])
            tmpEntry.append(tmpTrendAdj)
            dSetOut.append(tmpEntry)
    filename = 'datasets/'+iso+"-"+str(com)+'.csv'
    writeThisBitchOut(tmpList,filename)
    return dSetOut

def pullAndGenComLists(countries,commodities):
    for com in commodities:
        for c in countries:
            pullAndGenComList(c,int(com))
    return True

########################################################################
# combining Functions
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

def generateCompleteHR(countries,commodity):
    comList = getComLists(countries,commodity)
    emDat = processEmdat()
    result = combineComEm(comList,emDat)
    filename = 'datasets/humanReadable/'+'HR-'+commodity+'.csv'
    writeThisBitchOut(result,filename)
    return result

def generateCompleteMDL(countries,commodity):
    record = generateCompleteHR(countries,commodity)
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

def generateCompletes(countries,commodities):
    for c in commodities:
        generateCompleteMDL(countries,c)

def writeThisBitchOut(dSet,filename):
    print("writing "+filename+" out...")
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
    print(filename+" written out...")
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

########################################################################
#Generating commodity CSVs from a total country CSV
def pullAndGenComLists(iso,com):
    for i in iso:
        for c in com:
            pullAndGenComList(i,c)

def getComListFromTotalExportSheet(iso):
    file = 'datasets/'+iso+'-TotalExports.csv'
    try:
        dataset = pd.read_csv(file)
    except:
        print("ERROR:pullItCom("+file+")")    
        dataset =[]
        pass
    
    dSet = []
    tmpList = []
    tmpListList = []
    tmpCom = dataset.iloc[0,2]
    numRows = len(dataset)
    if (numRows !=0):
        for n in range(numRows):
            for ent in dataset.iloc[n,:4]:
                tmpList.append(ent)

            if (tmpCom != dataset.iloc[n,2]):
                tmpCom = dataset.iloc[n,2]
                dSet.append(tmpListList)
                tmpListList = []
                tmpListList.append(tmpList)
                tmpList = []
            else:
                tmpListList.append(tmpList)
                tmpList = []               

    sortedDSet = []
    
    for d in dSet:
        sortedDSet.append(sorted(d,key=lambda item:item[0]))
        
    return sortedDSet#dOut


def sortIt(dSet):
    sortedDSet = []
    for d in dSet:
        sortedDSet.append(sorted(d,key=lambda item:item[0]))
    return sortedDSet

def calcTrends(dSet):
    tmpEntry = []
    tmpLst = []
    adjDSet = []

    for lst in dSet:
        for line in range(len(lst)):
            for index in range(4):
                tmpEntry.append(lst[line][index])
            if line != 0:
                tmpEntry.append(tmpEntry[3]/lst[line-1][3])
                tmpLst.append(tmpEntry)                
            tmpEntry = []
        
        adjDSet.append(tmpLst)
        tmpLst = []
    
    outLst = adjDSet#[]
 
    return outLst

def calcAdjTrend(dSet):
    tmpTrnd = []
    
    for line in dSet:
        tmpTrnd.append(line[4])
        
    med = np.median(tmpTrnd)            
    std = np.std(tmpTrnd)    

    tmpEntry = []
    tmpLst = []
    
    for line in dSet:
        for index in range(5):
            tmpEntry.append(line[index])
        tmpEntry.append((tmpEntry[4]-med)/std)
        tmpLst.append(tmpEntry)
        tmpEntry = []
    return tmpLst

def genTotalCSV(iso):
    a = getComListFromTotalExportSheet(iso)
    b = calcTrends(a)
    
    dOut = []
    for lst in b:
        if len(lst)>1:
            try:
                dOut.append(calcAdjTrend(lst))
            except:
                print('fail')
                pass
            
    outD = []
    tmpLst = []
    for lst in dOut:
        for line in lst:
             tmpLst.append(line[:3]+line[4:])
        outD.append(tmpLst)
        tmpLst = []
        com = outD[-1][0][2]
        filename = 'datasets/'+iso+'-'+str(com)+'.csv'
        writeThisBitchOut(outD[-1],filename)

    return outD
########################################################################
#Modeling Functions
    
def getInsOuts(dSet):
    inputs = dSet.iloc[:,:-1].values
    outputs = dSet.iloc[:,-1:].values
    return inputs,outputs

def splitTrainTest(inputs,outputs):
    inputTrain, inputTest, outputTrain, outputTest = train_test_split(inputs,outputs,test_size = 0.2)
    return inputTrain, inputTest, outputTrain, outputTest

def regress(inputTrain,outputTrain):
    regressor = LinearRegression()
    regressor.fit(inputTrain,outputTrain)
    return regressor


def createModelRegressors():
    tmpI = []
    tmpO = []
    regs = []
    for m in modelDatasets:
        tmpI,tmpO = getInsOuts(m)
        iTr,iT,oTr,oT = splitTrainTest(tmpI,tmpO)
        r = regress(iTr,oTr)
        regs.append(r)
        print(r.score(iT,oT))
    return regs

def predict(arg):
    predictList = []
    resultDict = {'commodity':'change'}
    for m in models:
        predictList.append(m.predict(arg))
    for c in commodities:
        resultDict[c] = predictList[commodities.index(c)][0]
    return resultDict

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


########################################################################
# some more variables
modelDatasets = importModelDatasets()
models = createModelRegressors()
########################################################################