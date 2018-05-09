
class View:

    def __init__(self):
        pass

    def update(self,results):

        message = ""
        for line in open("frame.html", "r").readlines():
            message += line

        return message

