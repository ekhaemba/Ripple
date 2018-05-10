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
import os



class Sim:
    ########################################################################
    # Some Global variables
    countries = ['FRA','DEU','NGA','NLD','CIV','POL']
    commodities = ['1001','1701','1801','1804']#,'1904','1806'
    ########################################################################
    def __init__(self):
        self.modelDatasets = self.importModelDatasets()
        self.models = self.createModelRegressors()
        self.RANSACModels = self.createModelRegressorsRANSAC()
    
    
    #Function Definitions
    def printList(self,pList):
        """
        Description:
        Parameter(s):
        Returns:
        """
        for l in pList:
            print(l)

    def printListList(self,pList):
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
    def pullItEm(self,file):
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

    def fixYear(self,dSet):
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

    def groupByYear(self,dSet):
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

    def getDeathRate(self):
        file = open(os.path.abspath('../csv/datasets/deathrate.txt','r'))
        rawLines = []
        tmpList = []
        deathList = []
        tmpEntry = []
        tmpString = ""
        for line in file:
            rawLines.append(line.strip())
        for l in rawLines:
            if (l[:3] in self.countries):
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

    def calcDeathRate(self):
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

    def applyDeathRate(self,emDat,deathList):
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

    def calcImpactScore(self,dSet):
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

    def processEmdat(self):
        emDat = pullItEm(os.path.abspath('../csv/datasets/emdata.csv'))
        emDat = fixYear(emDat)
        emDat = groupByYear(emDat)
        deathRate = calcDeathRate()
        emDat = applyDeathRate(emDat,deathRate)
        emDat = calcImpactScore(emDat)
        return emDat

    ########################################################################
    # ComTrade Functions
    def pullItCom(self,file):
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

    def removeFirstComEntry(self,comList):
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
    def getComList(self,country,commodity):
        """
        Description:
        Parameter(s):country (string, three letter ISO code), commodity(string,HS code)
        Returns:
        """    
        country = os.path.abspath('../csv/datasets/'+country+'-'+commodity+'.csv')
        return pullItCom(country)

    def getComLists(self,countries,commodity):
        """be sure to use parameter in format ['ISO1','ISO2,...,'ISOn']"""
        comLists = []
        for c in self.countries:#range(l):
            comLists.append(getComList(c,commodity))
            #comLists.append(pullAndGenComList(c,commodity))
        return removeFirstComEntry(comLists)

    def pullAndGenComList(self,iso,com):
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
        ave = np.average(trendList)
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
        filename = os.path.abspath('../csv/datasets/'+iso+"-"+str(com)+'.csv')
        writeThisBitchOut(tmpList,filename)
        return dSetOut

    def pullAndGenComLists(self,countries,commodities):
        for com in commodities:
            for c in countries:
                pullAndGenComList(c,int(com))
        return True

    ########################################################################
    # combining Functions
    def combineComEm(self,comList,emDat):
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

    def generateCompleteHR(self,countries,commodity):
        comList = getComLists(countries,commodity)
        emDat = processEmdat()
        result = combineComEm(comList,emDat)
        filename = os.path.abspath('../csv/datasets/humanReadable/'+'HR-'+commodity+'.csv')
        writeThisBitchOut(result,filename)
        return result

    def generateCompleteMDL(self,countries,commodity):
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
        filename = os.path.abspath('../csv/datasets/modelIn/'+'model-'+commodity+'.csv')
        writeThisBitchOut(tmpList,filename)
        return tmpList

    def generateCompletes(self,countries,commodities):
        for c in commodities:
            generateCompleteMDL(countries,c)

    def writeThisBitchOut(self,dSet,filename):
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

    def importModelDatasets(self):
        dSets = []
        tmpDS = None
        filename = ''
        for c in self.commodities:
            filename = os.path.abspath('../csv/datasets/modelIn/model-'+c+'.csv')
            #print(filename)
            tmpDS = pd.read_csv(filename)
            dSets.append(tmpDS)
            tmpDS = None
            filename =''
        return dSets

    ########################################################################
    #Modeling Functions
        
    def getInsOuts(self,dSet):
        inputs = dSet.iloc[:,:-1].values
        outputs = dSet.iloc[:,-1].values
        return inputs,outputs

    def splitTrainTest(self,inputs,outputs):
        inputTrain, inputTest, outputTrain, outputTest = train_test_split(inputs,outputs,test_size = 0.2)
        return inputTrain, inputTest, outputTrain, outputTest

    def regress(self,inputTrain,outputTrain):
        regressor = LinearRegression()
        regressor.fit(inputTrain,outputTrain)
        return regressor

    def predict(self,arg):
        predictList = []
        resultDict = {'commodity':'change'}
        for m in self.models:
            predictList.append(m.predict(arg))
        for c in self.commodities:
            resultDict[c] = predictList[self.commodities.index(c)][0]
        return resultDict

    def createModelRegressors(self):
        tmpI = []
        tmpO = []
        regs = []
        for m in self.modelDatasets:
            tmpI,tmpO = self.getInsOuts(m)
            iTr,iT,oTr,oT = self.splitTrainTest(tmpI,tmpO)
            regs.append(self.regress(iTr,oTr))
        return regs

    def inputFunc(self,country, intensity):
        headers = []
        entry = []
        for c in self.countries:
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

    def runIt(self,c,i):
        q = self.inputFunc(c,i)
        r = self.predict(q)
        return r

    ########################################################################
    # RANSAC REGRESSION

    def createModelRegressorsRANSAC(self):
        tmpI = []
        tmpO = []
        regs = []
        for m in self.modelDatasets:
            tmpI,tmpO = self.getInsOuts(m)
            iTr,iT,oTr,oT = self.splitTrainTest(tmpI,tmpO)
            regs.append(self.regressRANSAC(iTr,oTr))
        return regs

    def regressRANSAC(self,inputTrain,outputTrain):
        regressor = RANSACRegressor()
        regressor.fit(inputTrain,outputTrain)
        return regressor

    def predictRANSAC(self,arg):
        predictList = []
        resultDict = {'commodity':'change'}
        for m in RANSACModels:
            predictList.append(m.predict(arg))
        for c in commodities:
            resultDict[c] = predictList[commodities.index(c)][0]
        return resultDict

    def RANSACIt(self,c,i):
        q = inputFunc(c,i)
        r = predictRANSAC(q)
        return r

        #modelDatasets = None#importModelDatasets()
        #models = None#createModelRegressors()
        #RANSACModels = None#createModelRegressorsRANSAC()
    def run(self,iso,impact):
        return self.runIt(iso,impact)
########################################################################
# some more variables
if __name__=="__main__":
    sim = Sim()
    sim2 = Sim()
    print(sim.run('FRA',.5),"\n",sim2.run("FRA",.5))
########################################################################
#Comparing models
#
#i,o = getInsOuts(modelDatasets[0])
#iT,iTt,oT,oTt = splitTrainTest(i,o)
#
#RANSAC = regressRANSAC(iT,oT)
#LIN = regress(iT,oT)
#
#ranP = RANSAC.predict(iT)
#linP = LIN.predict(iT)
#
#tmpIT = []
#for line in iT:
#    tmpIT.append(line[-1])
#
#plt.scatter(tmpIT,oT, color = 'red')
##plt.plot(tmpIT,linP, color = 'blue')
#plt.plot(tmpIT,ranP, color = 'orange')
#plt.title('Comparison of Regressions')
#plt.xlabel('Disaster Impact')
#plt.ylabel('Economic impact')
#plt.ylim(-2.5,2.5)
#plt.show()
#
#
#
#
"""
Description:
Parameter(s):
Returns:
"""

