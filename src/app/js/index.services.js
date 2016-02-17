'use strict';

angular.module('dataSet')
  .factory('userService', function ($resource) {
		return $resource('http://jsonplaceholder.typicode.com/users/:user', {user: "@user"}); 
   });

