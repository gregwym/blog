define(['angular', './directives'], function(angular) {
  return angular.module('app.controllers', ['app.directives'])
  .controller('all', function($scope, $http){
    $http.get('/posts').success(function(posts, status, headers, config) {
      $scope.posts = posts;
    });
  })
  .controller('show', function($scope, $http, $stateParams){
    $http.get('/posts/' + $stateParams.slug).then(function(result) {
      $scope.post = result.data;
      return $http.get($scope.post.url);
    })
    .then(function(result) {
      $scope.post.body = result.data;
    });
  });
});
