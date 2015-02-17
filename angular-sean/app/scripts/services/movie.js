/* global angular */

'use strict';

angular.module('ng101').service('MovieService', [ 
	function(){
		var svc = this;
		svc.favoriteMovie = {};
		return svc;
	}
]);