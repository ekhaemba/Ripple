import pickle

with open("isos_diff_set.pickle",'rb') as foo:
    bar = pickle.load(foo)
    print(bar)