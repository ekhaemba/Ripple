import os
import mysql.connector
import numpy as np
def clamp(x): 
    return int(max(0, min(x, 255)))
def red(x):
    if (x>0):
        return clamp(255 - np.sqrt(np.abs(x))*255)
    return 255
def green(x):
    if (x<0):
        return clamp(255 - np.sqrt(np.abs(x))*255)
    return 255
def color(x):
    if (x==0):
        return"808080"
    else:
        if (x!="FFFFFF"):
            x = float(x)
            #print(x,"#{0:02x}{1:02x}{2:02x}".format(red(x), green(x), 0))
            return "{0:02x}{1:02x}{2:02x}".format(red(x), green(x), 0)
        return x

class View:
    path = ""
    db = None
    def __init__(self):
        self.path = os.path.dirname(__file__)
        self.db = mysql.connector.connect(host="blockchain.cabkhfmbe846.us-east-2.rds.amazonaws.com", 
            user="user", passwd="notatotallysafepassword", db="Blockchain")
        pass
        
    def update(self,results,params):

        # for code in results:
# 
            # print(results[code])   
            # print(red(results.get(code,"FFFFFF")))
            # print(green(results.get(code,"FFFFFF")))
       

        # Get all the export data
        message = ""
        for line in open(os.path.join(self.path,"html/frame.html"), "r").readlines():
            if ("state_specific: {" in line):
                if params["mode"] == "calc":
                    message += "{\n"
                else:
                    message +=line
                if(len(results)>0):
                    cur = self.db.cursor()
                    cur.execute("SELECT * FROM country")
                    data = cur.fetchall()
                    for c in range(len(data)):
                        code = int(data[c][0])
                        name = data[c][1]
                        iso2 = data[c][2]
                        iso3 = data[c][3]
                        block = ""

                        if iso2 is not None and iso2[1] != "/":
                            
                            x = iso2+": {\n"
                            x+='\t color: "#{}",\n'.format(color(results.get(code,"FFFFFF")))
                            x+='\t name: "{}",\n'.format(name)
                            localChange = results.get(code,"No data")
                            if localChange != "No data":
                                localChange = "{0:.2f}".format(100*localChange)+'%'
                            x+='\t description: "{}"\n'.format(localChange)
                            if c<len(data)-1:
                                x+="},\n"
                            else:
                                x+="}\n"
                            message+=x
                        elif iso3 =="NAM":
                            x = "NA"+": {\n"
                            x+='\t color: "#{}",\n'.format(color(results.get(code,"FFFFFF")))
                            x+='\t name: "{}",\n'.format(name)
                            localChange = results.get(code,"No data")
                            if localChange != "No data":
                                localChange = "{0:.2f}".format(100*localChange)+'%'
                            x+='\t description: "{}"\n'.format(localChange)
                            if c<len(data)-1:
                                x+="},\n"
                            else:
                                x+="}\n"
                            message+=x
                            #block+="{}: {\n".format(str(iso2))
                            #print(block) 
                        #print(block)
                        #block+='color: "#{},\n'.format("990000")
                        #block+='name: "{}",\n'.format(name)
                        #block+='description: "{}"\n'.format(results[int(code)])
                        #block+='},\n'

                
            elif ('<select id = "country"' in line) and params["mode"] != "calc":
                message +=line 
                cur = self.db.cursor()
                cur.execute("SELECT * FROM country")
                data = cur.fetchall()
                for c in range(len(data)):
                    code = int(data[c][0])
                    name = data[c][1]
                    iso2 = data[c][2]
                    iso3 = data[c][3]
                    if (iso3 is not None):
                        block = '<option value="{}">{} ({})</option>'.format(code,name,iso3)
                    else:
                        continue
                    message+=block
            else:
                if params["mode"] != "calc":
                    message += line
            #message +=line

        if params["mode"] == "calc":
            message += "}"
            print(message)
        return message

