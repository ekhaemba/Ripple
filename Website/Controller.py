import http.server
import socketserver
from configparser import ConfigParser
def main():
    config = ConfigParser()
    config.read('webconfig.ini')
    PORT = config['web']['port']
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)
    print("serving at port", PORT)
    httpd.serve_forever()