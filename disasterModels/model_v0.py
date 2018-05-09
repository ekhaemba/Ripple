import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression

#importing dataset
dataset = pd.read_csv('/Users/jasonreynolds/Documents/School/2018S/CPEG657/Project/gitFolder/Ripple/disasterModels/datasets/modelIn/model-1701.csv')
inputs = dataset.iloc[:,:-1].values
output = dataset.iloc[:,-1].values

#splitting the dataset into training and test
inputTrain, inputTest, outputTrain, outputTest = train_test_split(inputs,output,test_size = 0.2)

#
#regressor = SVR(kernel = 'rbf')
#regressor.fit(inputs,output)
#output_pred = regressor.predict(6.5)

regressor = LinearRegression()
regressor.fit(inputTrain,outputTrain)

testFromJup = np.asarray([[1. , 0. , 0. , 0. , 0. , 0. , 0.3]])

#output_pred = regressor.predict(inputTest)
output_pred2 = regressor.predict(testFromJup)

#print(type(inputTrain))
print(inputTrain[0])
def runIt(country,intensity):
    
    resultDictionary = {'commodity','change'}
    return resultDictionary