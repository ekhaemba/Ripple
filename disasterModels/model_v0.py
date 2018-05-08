import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression

#importing dataset
dataset = pd.read_csv('datasets/modelOut.csv')
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

output_pred = regressor.predict(inputTest)


plt.scatter(inputs,output,color = 'red')
plt.plot(inputs,regressor.predict(inputs),color = 'blue')
plt.title('Truth or Bluff')
plt.xlabel('x axis')
plt.ylabel('y axis')
plt.show()

