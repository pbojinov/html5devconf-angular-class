var app = angular.module('weatherApp', []);

app.controller('HomeController', function($scope) {
	$scope.name = 'Petar';
	$scope.sayHello = function() {
		$scope.name = 'Someone else'
		alert('Hello ' + $scope.name);
	}
});
