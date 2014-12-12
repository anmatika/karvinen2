describe('homepage', function() {
  it('root should match /', function() {
    
    browser.get('http://localhost:3000');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  
  });

  it('should have title', function() {
    
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Karvinen Ry.');
  
  });


});