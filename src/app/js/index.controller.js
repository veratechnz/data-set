'use strict';

angular.module('dataSet')
.controller('MainCtrl', function($scope, userService){
		$scope.users = userService.query();
});