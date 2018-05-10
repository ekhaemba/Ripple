
import socketserver
import threading
from configparser import ConfigParser
from http.server import BaseHTTPRequestHandler, HTTPServer
from Model import *
from View import *

# def main():
#     config = ConfigParser()
#     config.read('webconfig.ini')
#     PORT = config['web']['port']
#     Handler = http.server.SimpleHTTPRequestHandler
#     httpd = socketserver.TCPServer(("", PORT), Handler)
#     print("serving at port", PORT)
#     httpd.serve_forever()



model = Model()
view = View()
path = os.path.dirname(__file__)
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
        global model
        global view
        global path
        if self.requestline ==  "GET /js/mapdata.js HTTP/1.1":
            message = open("js/mapData.js","r").read()

        elif self.requestline ==  "GET /js/worldmap.js HTTP/1.1":
            message = open("js/worldmap.js","r").read()

        elif self.requestline == "GET /html/map.html HTTP/1.1":
            message = open("html/map.html","r").read()

        elif self.requestline == "GET /resource/legendZoom.jpg HTTP/1.1":
            message = open("resource/legendZoom.jpg","rb").read()

        elif self.requestline == "GET /resource/legend.jpg HTTP/1.1":
            message = open("resource/legend.jpg","rb").read()
        else:
            try:
                params = getValues(self.requestline)
                message = format("%s is not a mode") % params["mode"]
                model.update(params)
                message = view.update(model.results)
            except Exception as err:
                print(err)
                print("URL ERROR")
                print(self.requestline)
                message = "Invalid url, are you supposed to be using /mode=init?"
        # Send response status code
        self.send_response(200)

        # Send headers
        self.send_header('Content-type', 'text/html')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
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
    server = ThreadedHTTPServer(('', 8080), RequestHandler)
    print('Running Ripple...')
    server.serve_forever()

run()