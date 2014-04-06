define(['angular', './directives'], function(angular) {
  return angular.module('app.controllers', ['app.directives'])
  .controller('main', ['$scope', '$http', function($scope, $http){
    $scope.posts = [];

    $scope.show = function(post) {
      $scope.post = post;
    };

    $http.get('/posts').success(function(data, status, headers, config) {
      $scope.posts = data;
    });
  }]);
});
