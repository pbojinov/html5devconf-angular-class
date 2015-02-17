/* global angular */

'use strict';

// Catches route change errors and route stuff
angular.module('ng101').controller('RootCtrl', ['$rootScope', '$window',
    function($rootScope, $window) {
    	$rootScope.on('$routeChangeError', function(event, current, previous, rejection) {
    		$window.alert(rejection);
    	});
    }
]);
