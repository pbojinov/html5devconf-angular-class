describe('HomeController', function() {

	var scope, WeatherService;

	beforeEach(module('weatherApp'));
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();

		WeatherService = $injector.get('WeatherService');

		$controller('HomeController', {
			$scope: scope,
			WeatherService: WeatherService
		});

		$httpBackend
			.when('JSONP', 'http://api.openweathermap.org/data/2.5/forecast/daily?&callback=angular.callbacks._0&cnt=1&mode=json&q=San+Francisco,+CA&units=imperial')
			.response(200, {});
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('has the city of San Francisco by default', function() {
		expect(scope.city).toMatch(/San Francisco/);
	});

	it('calls the weather service with the city', function() {
		spyOn(WeatherService, 'getWeatherFor').addCallThrough();
		scope.getWeatherData();
		expect(WeatherService.getWeatherFor).toHaveBeenCalled();
	});

	it('calls out toe openweathermap.org', function() {
		$httpBackend
			.expect('JSONP', 'http://api.openweathermap.org/data/2.5/forecast/daily?&callback=angular.callbacks._0&cnt=1&mode=json&q=San+Francisco,+CA&units=imperial')
			.response(200, {});
		scope.city = 'Phoenix, AZ';
		
	});

});