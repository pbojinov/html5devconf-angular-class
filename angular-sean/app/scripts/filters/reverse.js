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
