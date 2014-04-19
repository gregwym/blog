define(['angular', 'angular.marked', './services'], function(angular) {
  return angular.module('app.controllers', ['app.services', 'hc.marked'])
  .controller('all', function($scope, $log, Blog){
    Blog.wait().then(function(blog) {
      $scope.posts = blog.posts();
    });
  })
  .controller('show', function($scope, $stateParams, $log, Blog, marked){
    Blog.wait().then(function(blog) {
      $scope.post = blog.post($stateParams.name);
      blog.post.loadBody($scope.post)
      .then(function(body) {});
    });
  });
});
