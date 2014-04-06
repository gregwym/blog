define(['angular'], function(angular) {
  return angular.module('app.directives', [])
  .directive('container', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/container',
      controller: function($scope, $log) {

      },
      link: function($scope, iElm, iAttrs, controller) {

      }
    };
  })
  .directive('list', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/list',
      controller: function($scope, $log) {

      }
    };
  });
});
