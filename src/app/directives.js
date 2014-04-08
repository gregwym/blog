define(['angular', 'marked', 'angular.marked'], function(angular, marked) {
  return angular.module('app.directives', ['hc.marked'])
  .directive('list', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/list'
    };
  })
  .directive('post', function(){
    return {
      restrict: 'E',
      scope: {
        content: '='
      },
      templateUrl: '/templates/post'
    };
  });
});
