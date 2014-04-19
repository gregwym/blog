define(['angular', 'angular.marked'], function(angular, marked) {
  return angular.module('app.directives', ['hc.marked'])
  .directive('list', function() {
    return {
      restrict: 'E',
      templateUrl: '/src/templates/list.html'
    };
  })
  .directive('post', function(){
    return {
      restrict: 'E',
      templateUrl: '/src/templates/post.html'
    };
  });
});
