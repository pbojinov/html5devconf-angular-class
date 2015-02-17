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
/* global angular */

'use strict';

angular.module('ng101').controller('MainCtrl', ['$interval', 'MovieService',
    function($interval, MovieService) {

    	var ctrl = this;

    	// binds the service to this scope but propigates to others
    	this.movieService = MovieService;

    	// so you dont have to reference service service in view layer
    	this.favoriteMovie = this.movieService.favoriteMovie;


    	ctrl.className = 'Angular 101';
    	ctrl.classDescription = 'welcome to the class';

    	$interval(function() {
    		ctrl.now = new Date().toString();
    	}, 1000);

    	ctrl.movies = [
    		{title:'The Hobbits', year: 2013},
    		{title:'Lord of the Rings 1', year: 2004},
    		{title:'Lord of the Rings 2', year: 2006},
    		{title:'Lord of the Rings 3', year: 2008},
    	];
    }
]);

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
/* global angular */

'use strict';

angular.module('ng101').filter('reverse', [
    function() {
    	// limit is anything after the colon, eg reverse:4
    	return function(text, limit) {
    		return text.split('').reverse().splice(0, limit).join('');
    	}
    }
]);

/* global angular */

'use strict';

angular.module('ng101').service('MovieService', [ 
	function(){
		var svc = this;
		svc.favoriteMovie = {};
		return svc;
	}
]);