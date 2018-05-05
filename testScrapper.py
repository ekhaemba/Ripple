from configparser import ConfigParser
import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
class PythonOrgSearch(unittest.TestCase):
    user = ""
    password = ""
    driverPath = ""
    url = ""
    def setUp(self):
        config = ConfigParser()
        config.read('config.ini')
        self.driverPath = config['driver']['driver']
        self.user = config['emdat']['user']
        self.password = config['emdat']['password']
        self.driver = webdriver.Chrome(self.driverPath)
        self.url = config['emdat']['url']
    def test_search_in_python_org(self):
        driver = self.driver
        url = self.url
        #driver.get(self.url)
        ready = WebDriverWait(url,10).until(EC.presence_of_element_located((By.ID, 'loginwindow-1010')))
        #time.sleep(13)
        #self.assertIn("emdat_db", driver.title)
        user = driver.find_element_by_id("textfield-1012-inputEl")
        user.send_keys("")
        password = driver.find_element_by_id("textfield-1013-inputEl")
        password.send_keys("")
        log = driver.find_element_by_id("button-1017-btnInnerEl")
        print("Clicked")
        log.click()
        #assert "No results found." not in driver.page_source
        page = driver.page_source
        print(page)
        
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
