var app = angular.module('weatherApp', []);

app.service('WeatherService', ['$http',
    function() {

        var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

        this.getWeatherFor = function(city) {
            $http({
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
            });
        };
    }
]);

app.controller('HomeController', ['$scope', '$http', 'WeatherService',

    function($scope, $http, WeatherService) {

        $scope.city = 'San Francisco, CA';

        $scope.fetchData = function() {
            $scope.getWeatherData();
            $scope.getYelpData();
        }

        $scope.getWeatherData = function() {
            console.log('fetchData called', $scope.city);
            WeatherService.getWeatherFor($scope.city).then(function(weather) {
                $scope.weather = weather;
            });
        }

        var yelpUrl = 'http://api.yelp.com/business_review_search',
            yelpKey = 'ZS-n2aias1RlYWGelWbogw';

        $scope.getYelpData = function() {
            $http({
                method: 'JSONP',
                url: yelpUrl,
                params: {
                    callback: 'JSON_CALLBACK',
                    ywsid: yelpKey,
                    location: $scope.city
                }
            }).then(function(data) {
                console.log('data', data.data);
                $scope.nearby = data.data;
            }).
            catch (function(err) {
                console.error('error in yelp fetch', err);
                $scope.error = err;
            });
        }
    }
]);
