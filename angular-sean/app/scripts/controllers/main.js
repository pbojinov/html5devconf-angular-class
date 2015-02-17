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

        ctrl.checkMovieTitle = function() {
            return this.favoriteMovie.title === movie.title;
        };

    	ctrl.movies = [
    		{title:'The Hobbits', year: 2013},
    		{title:'Lord of the Rings 1', year: 2004},
    		{title:'Lord of the Rings 2', year: 2006},
    		{title:'Lord of the Rings 3', year: 2008},
    	];
    }
]);
