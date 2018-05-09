
class View:

    def __init__(self):
        pass

    def update(self, simulator):

        message = ""
        lines = open("frame.html", "r").readlines()

        for line in lines:
            temp = line.strip()
            if temp == "*<fill>*":
                pass
            else:
                message += line

        return message