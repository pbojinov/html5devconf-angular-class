var app = angular.module('weatherApp', []);

app.controller('HomeController', ['$scope', '$http',
    function($scope, $http) {
        $scope.fetchData = function() {
            console.log('fetchData called', $scope.city);
        }
    }
]);
