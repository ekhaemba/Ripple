import os
def decode(x):
    d = ""
    p = 0
    print(len(x))
    while (p<len(x)):
        if (x[p] != "`"):
            d += x[p]
            p+=1
        else:
            l = ord(x[p + 3]) - 28
            if (l > 4):
                d += d[len(d) - ord(x[p + 1]) * 96 - ord(x[p + 2]) + 3104 - l:l]
            else:
                d += "`"
            p += 4

    return d

text = open("text",'r').readline()
print(decode(text))