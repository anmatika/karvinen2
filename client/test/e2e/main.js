describe('homepage', function() {
  beforeEach(function (){
    browser.get('http://localhost:3000');
  });

  it('root should match /', function() {
    
    expect(browser.getLocationAbsUrl()).toMatch("/");
  
  });

  it('should have title', function() {
    
    expect(browser.getTitle()).toEqual('Karvinen Ry.');
  
  });

  it('logo click routes back to home', function() {

	browser.get('http://localhost:3000/#/ryhmat');
	var logo = element.all(by.css('#logo_image a')).first();
	logo.click();
	expect(browser.getLocationAbsUrl()).toMatch("/");

  });

});