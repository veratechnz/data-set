(function() {
  'use strict';

  angular
    .module('dataSet')
    .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {

      //If no other routes are picked url defaults to
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/partials/home.html'
        })
        .state('data', {
          url: '/data',
          templateUrl: 'app/partials/data.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'app/partials/about.html'
        })
    }

})();
