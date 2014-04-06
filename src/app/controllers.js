define(['angular', './directives'], function(angular) {
  return angular.module('app.controllers', ['app.directives'])
  .controller('main', function($scope){
    $scope.showing = 'list';
  });
});
