/* global angular */

'use strict';

var app = angular.module('ng101');

app.directive('movie', [
	function() {
		return {
			restrict: 'E', 	// or A, C, M
			transclude: true,
			scope: {
				//releaseDate: '@year'
				//<movie year=... then reference releaseDate in logic
				title: '@', // literal value
				year: '@', // literal value
				meta: '=', 	// two-way binding
				click: '&', // expression
			},
			// use either or
			// template: '<h1>{{title}}</h1><h3>{{year}}</h3><div ng-transclude></div>',
			templateUrl: 'app/views/partials/movie.html',
			// for directives that manipulate the DOM
			link: function(scope, element, attrs) {
				// constructor logic goes here
				scope.$on('$destroy', function() {
					// Garbase collect, remove bindings
				});
			}
		};
	}
]);