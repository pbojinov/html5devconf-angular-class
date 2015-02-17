/* global angular */

'use strict';

angular.module('ng101', [
	'ngAnimate',
	'ngResource',
	'ngSanitize',
	'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/pages/main.html',
		controller: 'MainCtrl as mainCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}])
.run(['$route', function() {

}]);