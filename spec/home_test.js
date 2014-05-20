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
	}));

	it('has the city of San Francisco by default', function() {
		expect(scope.city).toMatch(/San Francisco/);
	});

	it('calls the weather service with the city', function() {

	});

});