var homepage = {
  pageHeading: element(webdriver.By.id('welcome')),
  get:function(){
    browser.get('index.html');
  }
};
