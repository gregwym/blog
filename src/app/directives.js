define(['angular'], function(angular) {
  return angular.module('app.directives', [])
  .directive('container', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/container',
      controller: function($scope, $log) {
        $scope.posts = ['abc', 'def'];
      },
      link: function($scope, iElm, iAttrs, controller) {

      }
    };
  });
});
