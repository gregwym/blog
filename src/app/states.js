define(['angular', 'angular.ui.router', './controllers', './directives'], function(angular) {
  angular.module('app.states', ['ui.router', 'app.controllers', 'app.directives'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
    .state('all', {
      url: '/',
      templateUrl: '/src/templates/all.html',
      controller: 'all'
    })
    .state('show', {
      url: '/:name',
      templateUrl: '/src/templates/show.html',
      controller: 'show'
    });
  });
});
