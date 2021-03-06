from configparser import ConfigParser
import unittest
import selenium
import sys
import csv
from bs4 import BeautifulSoup as bsoup
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException, WebDriverException
import time

import pickle
missing = []
with open("isos_diff_set.pickle",'rb') as foo:
    missing = pickle.load(foo)
    print(missing)


def wheel_element(element, deltaY = 120, offsetX = 0, offsetY = 0):
  error = element._parent.execute_script("""
    var element = arguments[0];
    var deltaY = arguments[1];
    var box = element.getBoundingClientRect();
    var clientX = box.left + (arguments[2] || box.width / 2);
    var clientY = box.top + (arguments[3] || box.height / 2);
    var target = element.ownerDocument.elementFromPoint(clientX, clientY);

    for (var e = target; e; e = e.parentElement) {
      if (e === element) {
        target.dispatchEvent(new MouseEvent('mouseover', {view: window, bubbles: true, cancelable: true, clientX: clientX, clientY: clientY}));
        target.dispatchEvent(new MouseEvent('mousemove', {view: window, bubbles: true, cancelable: true, clientX: clientX, clientY: clientY}));
        target.dispatchEvent(new WheelEvent('wheel',     {view: window, bubbles: true, cancelable: true, clientX: clientX, clientY: clientY, deltaY: deltaY}));
        return;
      }
    }    
    return "Element is not interactable";
    """, element, deltaY, offsetX, offsetY)
  if error:
    raise WebDriverException(error)
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
        driver.get(self.url)
        time.sleep(4)
        #self.assertIn("emdat_db", driver.title)
        user = driver.find_element_by_id("textfield-1012-inputEl")
        user.send_keys(self.user)
        password = driver.find_element_by_id("textfield-1013-inputEl")
        password.send_keys(self.password)
        login = driver.find_element_by_id("button-1017-btnInnerEl")
        login.click()
        try:
            page = WebDriverWait(driver,10)
            profiles = page.until(EC.presence_of_element_located((By.XPATH,'//*[@id="button-1026-btnInnerEl"]')))
        except TimeoutException:
            print("Took to long to load page")
        profiles.click()
        time.sleep(1)
        # Country selection
        dataFile = open('emdataMissing.csv','w')
        validClasses = set([
        'x-grid-cell-gridcolumn-1125',
        'x-grid-cell-gridcolumn-1127',
        'x-grid-cell-gridcolumn-1133',
        'x-grid-cell-gridcolumn-1137',
        'x-grid-cell-gridcolumn-1139'
        ])
        ##
        with dataFile:
            writer = csv.writer(dataFile)
            #writer.writerow(['Date','ISO','Type','Death','Dollars'])
            step = 1
            for i in range(0,230,step):
                
                countryRadio = driver.find_element_by_id("radiofield-1055-inputEl")
                countryRadio.click()
                countryTop = driver.find_element_by_xpath('//*[@id="boundlist-1079-listEl"]/li[{}]'.format(i+1))
                #countryBot = driver.find_element_by_xpath('//*[@id="boundlist-1079-listEl"]/li[{}]'.format(i+step))
                #print("Getting countries {}:{} to {}:{}".format(i+1,countryTop.text,i+step,countryBot.text))
                addBtn = driver.find_element_by_xpath('//*[@id="button-1085-btnIconEl"]')
                #ActionChains(driver).key_down(Keys.SHIFT).click(countryTop).click(countryBot).key_up(Keys.SHIFT).perform()
                countryTop.click()
                addBtn.click()
                # Disaster selection
                #time.sleep(20)
                climate = driver.find_element_by_xpath('//*[@id="treeview-1091-record-384"]/tbody/tr/td/div/input')
                aliens = driver.find_element_by_xpath('//*[@id="treeview-1091-record-385"]/tbody/tr/td/div/input')
                geo = driver.find_element_by_xpath('//*[@id="treeview-1091-record-386"]/tbody/tr/td/div/input')
                hydro = driver.find_element_by_xpath('//*[@id="treeview-1091-record-387"]/tbody/tr/td/div/input')
                meteor = driver.find_element_by_xpath('//*[@id="treeview-1091-record-388"]/tbody/tr/td/div/input')
                climate.click()
                aliens.click()
                geo.click()
                hydro.click()
                meteor.click()
                #time.sleep(1)
                # Search options

                available = driver.find_element_by_xpath('//*[@id="boundlist-1095-listEl"]')
                searchAdd = driver.find_element_by_xpath('//*[@id="button-1101-btnIconEl"]')
                items = available.find_elements_by_tag_name("li")
                death =items[2]# driver.find_element_by_xpath('//*[@id="boundlist-1095-listEl"]/li[3]')
                death.click()
                searchAdd.click()
                available = driver.find_element_by_xpath('//*[@id="boundlist-1095-listEl"]')
                searchAdd = driver.find_element_by_xpath('//*[@id="button-1101-btnIconEl"]')
                items = available.find_elements_by_tag_name("li")
                damage = items[3]#driver.find_element_by_xpath('//*[@id="boundlist-1353-listEl"]/li[5]')
                damage.click()
                searchAdd.click()
                #time.sleep(2)
                search = driver.find_element_by_xpath('//*[@id="button-1106-btnEl"]')
                search.click()
                time.sleep(2)
                '''
                try:
                    #container = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                    page = WebDriverWait(driver,3)
                    #pageWait = page.until(driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]').find_element_by_id('gridview-1143-record-409'))
                    #pageWait = page.until(EC.presence_of_element_located((By.XPATH,'//*[@id="gridview-1143-record-407"]')))
                except TimeoutException:
                    print("No data available")
                '''
                #time.sleep(15)
                #if (i==220):
                #    time.sleep(15)

                # Get data table
                mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                # Get top item
                tab = mainTable.find_elements_by_class_name('x-grid-item')
                if len(tab)==0:
                    reset = driver.find_element_by_xpath('//*[@id="button-1107-btnInnerEl"]')
                    reset.click()
                    time.sleep(1)
                    continue
                top = tab[0]
                # select it
                top.click()
                # Get the soup
                html = top.get_attribute('innerHTML')
                id = bsoup(top.get_attribute('outerHTML'),'html.parser').table.attrs['id']
                oldid = id
                print("Writing table")
                while True:

                    # Edit this block of code to determine what goes out to the file
                    # Start block
                    # Get the soup
                    soup = bsoup(html,'html.parser')
                    data = []
                    skip = True
                    for idx,row in enumerate(soup.find_all('td')):
                        if (len(set.intersection(set(row.attrs['class']),validClasses))):
                            if (row.text=='\xa0'):
                                data.append(str(0))
                            else:
                                data.append(row.text)
                            if data[-1] in missing:
                                skip=False
                    #print(data)
                    if skip:
                        break
                    writer.writerow(data)
                    
                    #print(date,iso,disType,deaths,dollars)
                    # Print out the id
                    #data.write(id)
                    # Print out the contents of each table row
                    #data.write(str(soup.encode('utf-8')))
                    # End block
                    
                    # Wait for table to load entirely
                    #time.sleep(.5)
                    # Press the down key
                    ActionChains(driver).key_down(Keys.DOWN).perform()
                    # Update main table
                    mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                    try:
                        # mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                        # Try to get the newly selected element
                        top = mainTable.find_element_by_class_name('x-grid-item-selected')
                        # Get the soup
                        html = top.get_attribute('innerHTML')
                        id = bsoup(top.get_attribute('outerHTML'),'html.parser').table.attrs['id'] 
                        if oldid == id:
                            time.sleep(1)
                            scroll = driver.find_element_by_xpath('//*[@id="disasterlist_disasterslist-1122-body"]')
                            
                            wheel_element(scroll, 120)
                            print("Scrolling")
                            # Press down one more time to make sure its the bottom of the page
                            ActionChains(driver).key_down(Keys.DOWN).key_up(Keys.DOWN).perform()
                            mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                            # Try to get the newly selected element
                            tmp = mainTable.find_element_by_class_name('x-grid-item-selected')
                            # Get the soup
                            tmpid = bsoup(tmp.get_attribute('outerHTML'),'html.parser').table.attrs['id'] 
                            if tmpid == id:
                                break
                        else:
                            oldid = id
                    except Exception as err:
                        #print(err)
                        print("Crash, fixing now")                    
                        # Grab id number
                        k=id.split('-')[3]
                        newID = id[:-len(k)]
                        #print("{}{}".format(newID,k))
                        while True:
                            try:
                                while True:
                                    try:
                                        #print("Searching for item: {}".format(newID+k))
                                        # Try to get a new selected element
                                        oldtop = None
                                        mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                                        oldtop = mainTable.find_element_by_xpath('//*[@id="{}{}"]'.format(newID,k))
                                    except WebDriverException:
                                        #time.sleep(1)
                                        # Try another id
                                        k=str(int(k)+1)
                                        continue
                                    break
                                # Found it
                                #print(oldtop)
                                oldtop.click()
                            except WebDriverException:
                                continue
                            break
                        #ActionChains(driver).key_down(Keys.DOWN).key_up(Keys.DOWN).perform()
                        mainTable = driver.find_element_by_xpath('//*[@id="gridview-1143"]/div[2]')
                        top = mainTable.find_element_by_class_name('x-grid-item-selected')
                        #time.sleep(10)
                        #sys.exit(0)
                    #if id == old:
                    #    break
                    #else:
                    #    old = id
                    #html = driver.page_source
                    #soup = bsoup(html,'lxml')
                    #table = soup.find(name='div',attrs={'class':'x-grid-view','id':'gridview-1143'})
                    #print(table)
                    #data.write(str(table.encode('utf-8')))
                    
                print("Wrote data")
                reset = driver.find_element_by_xpath('//*[@id="button-1107-btnInnerEl"]')
                reset.click()
                time.sleep(1)
            #time.sleep(10)
            #data.write(str(table.encode('utf-8')))
            #data.close()
        print("Done")
        
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
