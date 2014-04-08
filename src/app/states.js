define(['angular', 'angular.ui.router', './controllers'], function(angular) {
  angular.module('app.states', ['ui.router', 'app.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
    .state('all', {
      url: '/',
      templateUrl: 'templates/all',
      controller: 'all'
    })
    .state('show', {
      url: '/:slug',
      templateUrl: 'templates/show',
      controller: 'show'
    });
  });
});
