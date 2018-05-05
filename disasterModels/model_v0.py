import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split

#importing dataset
dataset = pd.read_csv('testData.csv')
inputs = dataset.iloc[:,:-1].values
output = dataset.iloc[:,-1].values

#splitting the dataset into training and test
inputTrain, inputTest, outputTrain, outputTest = train_test_split(inputs,output,test_size = 0.2)
