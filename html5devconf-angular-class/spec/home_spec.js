describe('Home', function() {

	beforeEach(function() {
		browser.get('/');
	})

	it('has a search box', function() {
		expect(
			element(by.css('#searchInput'))
		).toBeDefined();
	});

	it('gets the weather', function() {
		element(by.model('city')).clear();
		element(by.model('city')).sendKeys('Phoenix, AZ');
		element(by.css('button[type="submit"'))
		expect(
			element(by.css('#currentWeather'))
		).toContain('The weather in Phoenix');
	});

});