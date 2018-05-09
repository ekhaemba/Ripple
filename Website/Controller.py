import http.server
import socketserver
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

def getValues(requestString):

    params = {}
    paramString = requestString.split(" ")[1].strip("/")
    pairs = paramString.split("&")

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

        if self.requestline ==  "GET /mapdata.js HTTP/1.1":
            message = open("mapData.js","r").read()

        elif self.requestline ==  "GET /worldmap.js HTTP/1.1":
            message = open("worldmap.js","r").read()

        else:
            params = getValues(self.requestline)
            message = format("%s is not a mode") % params["mode"]
            
            model.update(params)
            message = view.update(model.results)
 

        # Send response status code
        self.send_response(200)

        # Send headers
        self.send_header('Content-type', 'text/html')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.end_headers()

        # Write content as utf-8 data
        self.wfile.write(bytes(message, "utf8"))
        return
    
def run():

    # Server settings
    # Choose port 8080, for port 80, which is normally used for a http server, you need root access
    server_address = ('0.0.0.0', 8080)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Running Span...')
    httpd.serve_forever()


run()