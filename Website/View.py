import os
class View:
    path = ""
    def __init__(self):
        self.path = os.path.dirname(__file__)
        pass

    def update(self,results):

        message = ""
        for line in open(os.path.join(self.path,"html/frame.html"), "r").readlines():
            message += line

        return message

