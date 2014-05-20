var app = angular.module('weatherApp', ['ui.router']);

app.config(function($stateProvider) {
    	$stateProvider.state('root', {
    		url: '',
    		controller: 'HomeController',
    		templateUrl: 'home.html'
    	});
    }
);

app.service('WeatherService', ['$http', '$q',

    function($http, $q) {

        var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

        this.getWeatherFor = function(city) {
            return $http({
                method: 'JSONP',
                url: weatherUrl,
                params: {
                    mode: 'json',
                    units: 'imperial',
                    callback: 'JSON_CALLBACK',
                    cnt: 1,
                    q: city
                }
            }).then(function(data) {
                console.log('data ', data.data);
                return data.data;
            }).
            catch (function(err) {
                console.error('error in weather fetch ', err);
                $q.reject({
                    error: err
                });
            });
        }
    }
]);

app.service('YelpService', ['$http', '$q',

    function($http, $q) {

        var yelpUrl = 'http://api.yelp.com/business_review_search',
            yelpKey = 'ZS-n2aias1RlYWGelWbogw';

        this.getLocationsFor = function(city) {
            return $http({
                method: 'JSONP',
                url: yelpUrl,
                params: {
                    callback: 'JSON_CALLBACK',
                    ywsid: yelpKey,
                    location: city
                }
            }).then(function(data) {
                console.log('data', data.data);
                return data.data;
            }).
            catch (function(err) {
                console.error('error in yelp fetch', err);
                $q.reject({
                    error: err
                });
            });
        }
    }
]);

app.controller('HomeController', ['$scope', '$http', 'WeatherService', 'YelpService',

    function($scope, $http, WeatherService, YelpService) {

        $scope.city = 'San Francisco, CA';

        $scope.fetchData = function() {
            console.log('fetchData called', $scope.city);
            $scope.getWeatherData();
            $scope.getYelpData();
        }

        $scope.getWeatherData = function() {
            WeatherService.getWeatherFor($scope.city).then(function(weather) {
                $scope.weather = weather;
            }).
            catch (function(err) {
                $scope.error = err;
            });
        }

        $scope.getYelpData = function() {
            YelpService.getLocationsFor($scope.city).then(function(nearby) {
                $scope.nearby = nearby;
            }).
            catch (function(err) {
                $scope.error = err;
            });
        }
    }
]);
