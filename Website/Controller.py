
import socketserver
import threading
from configparser import ConfigParser
from http.server import BaseHTTPRequestHandler, HTTPServer
from Model import *
from View import *
import sys, traceback,logging,datetime
# def main():
#     config = ConfigParser()
#     config.read('webconfig.ini')
#     PORT = config['web']['port']
#     Handler = http.server.SimpleHTTPRequestHandler
#     httpd = socketserver.TCPServer(("", PORT), Handler)
#     print("serving at port", PORT)
#     httpd.serve_forever()


def setup_logger(name, log_file,formatter,level=logging.INFO):
    """Function setup as many loggers as you want"""

    handler = logging.FileHandler(log_file)        
    handler.setFormatter(formatter)
    logger = logging.getLogger(name)
    logger.setLevel(level)
    logger.addHandler(handler)

    return logger

# model = Model()
view = View()
path = os.path.dirname(__file__)
now = datetime.datetime.now()
serverFormat = logging.Formatter('%(levelname)s - %(message)s')
serverLog = setup_logger('server','log/server_{}.log'.format(now.strftime('%Y_%m_%d')),serverFormat)
errorFormat = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
errorLog = setup_logger('error','log/error_{}.log'.format(now.strftime('%Y_%m_%d')),errorFormat,logging.DEBUG)
#errorLog = logging.basicConfig(filename='log/error.txt',level=log.DEBUG)
#errorFormat = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
#errorLog.setFormatter(errorFormat)
def getValues(requestString):

    params = {}
    paramString = requestString.split(" ")[1].strip("/")
    pairs = paramString.split("&")
    print(pairs)
    for pair in pairs:
        key = pair.split("=")[0]
        value = pair.split("=")[1]
        params[key] = value
    return params

class RequestHandler(BaseHTTPRequestHandler):
    
    # GET
    def do_GET(self):
        # global  model
        global view
        serverLog.info(str(self.date_time_string())+": "+self.client_address[0] + " - - " + self.requestline)
        if self.requestline ==  "GET /js/mapdata.js HTTP/1.1":
            message = open("js/mapData.js","r").read()
        elif self.requestline ==  "GET /js/worldmap.js HTTP/1.1":
            message = open("js/worldmap.js","r").read()
        elif self.requestline == "GET / HTTP/1.1":
            message =open("html/index.html",'r').read()
        elif self.requestline == "GET /html/map.html HTTP/1.1":
            message = open("html/map.html","r").read()
        elif self.requestline == "GET /css/main.css HTTP/1.1":
            message = open("css/main.css","r").read()

        elif self.requestline == "GET /resource/legendZoom.jpg HTTP/1.1":
            message = open("resource/legendZoom.jpg","rb").read()
        elif self.requestline == "GET /resource/RIPPLEpurple.png HTTP/1.1":
            message = open("resource/RIPPLEpurple.png","rb").read()
        elif self.requestline == "GET /resource/legend.jpg HTTP/1.1":
            message = open("resource/legend.jpg","rb").read()
        elif self.requestline == "GET /resource/RIPPLE.png HTTP/1.1":
            message = open("resource/RIPPLE.png","rb").read()
        elif self.requestline == "GET /resource/github-logo.png HTTP/1.1":
            message = open("resource/github-logo.png","rb").read()
        elif self.requestline == "GET /favicon.ico HTTP/1.1":
            message = open("resource/RIPPLE.ico","rb").read()
        else:
            try:
                model = Model()
                params = getValues(self.requestline)
                message = format("%s is not a mode") % params["mode"]
                model.update(params)
                message = view.update(model.results,params)
            except Exception as err:
                print("Unhandled error:")
                info = sys.exc_info()
                print("Error type: ",info[1])
                #print(traceback.print_tb(info[2],file=sys.stdout))
                print(self.requestline)
                error = ",\n\t\t".join(list(map(str,traceback.extract_tb(info[2]))))
                errorLog.debug(str(info[1])+" :\n\t\t"+error)
                print("Error logged, check log folder")
                message = "Invalid url, are you supposed to be using /mode=init?"
        # Send response status code
        self.send_response(200)

        # Send headers
        if ".html" in self.requestline:
            self.send_header('Content-type', 'text/html')
        elif (".css" in self.requestline):
            self.send_header('Content-type', 'text/css')
        elif (".js" in self.requestline):
            self.send_header('Content-type', 'text/javascript')
        else:
            self.send_header('Content-type', 'text/html')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST')
        self.end_headers()

        # Write content as utf-8 data
        if type(message) != bytes:
            message = bytes(message, "utf8")
        self.wfile.write(message)
        return
    
class ThreadedHTTPServer(socketserver.ThreadingMixIn, HTTPServer):
   """Handle requests in a separate thread."""


def run():

    # Server settings
    # Choose port 8080, for port 80, which is normally used for a http server, you need root access
    #server = ThreadedHTTPServer(('localhost', 8080), Handler)
    #print('Running Ripple...')
    #server.serve_forever()
    server_address = ('0.0.0.0', 8080)
    httpd = ThreadedHTTPServer(server_address, RequestHandler)

    print('Running Ripple...')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("Ending server due to keyboard interrupt")
if __name__ == '__main__':
    run()