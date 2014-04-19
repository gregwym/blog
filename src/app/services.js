define(['angular', 'angular.octokit'], function(angular) {
  return angular.module('app.services', ['octokit.adapter'])
  .config(function($octokitProvider) {
    $octokitProvider.setOptions({
      username: "gregwym-blog",
      password: "gregblog123"
    });
  })
  .service('BlogConfig', function($http, $q, $log){
    var config = $q.defer();

    $http.get('/usr/config.json')
    .success(function(data, status, headers) {
      $log.info('Blog config loaded');
      $log.debug(data);
      config.resolve(data);
    })
    .error(function(data, status, headers) {
      $log.error('Cannot read blog config: ' + data);
      config.reject(data);
    });

    this.config = function() {
      return config.promise;
    };
  })
  .service('Blog', function(BlogConfig, $rootScope, $octokit, $q, $log){
    var self = this;
    var loading = $q.defer();
    var config = BlogConfig.config();
    var repo, branch = {}, posts = [];

    config.then(function(result) {
      config = result;
      repo = $octokit.getRepo(config.username, config.repo);
      $log.info('Repo loaded');
      $log.debug(repo);
      return repo.getBranch(config.branch);
    })
    .then(function(result) {
      angular.extend(branch, result);
      $log.info('Branch loaded');
      $log.debug(branch);
      return branch.contents('posts');
    })
    .then(function(result) {
      angular.copy(result, posts);
      $log.info('Posts loaded');
      $log.debug(posts);
      loading.resolve(self);
    });

    this.wait = function() {
      return loading.promise;
    };

    this.posts = function() {
      return posts;
    };

    this.post = function(name) {
      var post = posts.filter(function(post) {
        return post.name == name;
      }, this)[0];
      $log.info('Loading post: ' + post.path);

      return post;
    };

    this.post.loadBody = function(post) {
      if (!post._bodyLoader) {
        var loader = post._bodyLoader = $q.defer();

        branch.contents(post.path)
        .then(function(result) {
          $log.info('Post content loaded: ' + post.name);
          $log.debug(result);
          post.body = result;
          loader.resolve(result);
        });
      }

      return post._bodyLoader.promise;
    };
  });
});
