var app = angular.module('weatherApp', []);

app.controller('HomeController', ['$scope', '$http',
    function($scope, $http) {

        var weatherUrl = 'http://api.openweathermap.org/data/2.5/' +
            'forecast/daily?mode=json' +
            '&units=imperial&cnt=1' +
            '&callback=JSON_CALLBACK' +
            '&q=';

        $scope.fetchData = function() {
            console.log('fetchData called', $scope.city);

            $http({
            	method: 'JSONP',
            	url: weatherUrl + $scope.city
            });
        }
    }
]);
