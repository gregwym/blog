require.config({
  baseUrl: '/src',
  paths: {
    'jquery': '../lib/jquery/dist/jquery',
    'marked': '../lib/marked/lib/marked',
    'octokit': '../lib/octokit/octokit',
    'angular': '../lib/angular/angular',
    'angular.marked': '../lib/angular-marked/angular-marked',
    'angular.octokit': '../lib/angular-octokit-adapter/dist/angular-octokit-adapter',
    'angular.ui.router': '../lib/angular-ui-router/release/angular-ui-router',
    'angular.ui.bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular.marked': ['angular', 'marked'],
    'angular.octokit': ['angular', 'octokit'],
    'angular.ui.router': ['angular'],
    'angular.ui.bootstrap': ['angular']
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';
require(['marked', 'octokit'], function(marked, Octokit) {
  this.marked = marked;
  this.Octokit = Octokit;
});

require(['angular', 'app/index'], function (angular, app) {
  console.log('App loaded');
  angular.resumeBootstrap();
  return app;
});
