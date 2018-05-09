
class View:

    def __init__(self):
        pass

    def update(self, data="",id=""):

        message = ""
        lines = open("frame.html", "r").readlines()

        for line in lines:
            temp = line.strip()
            if temp == "<!-- Map -->" and id =="map":
                message += data
            else:
                message += line
    
        return message