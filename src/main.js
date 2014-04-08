require.config({
  baseUrl: '/src',
  paths: {
    'marked': '../lib/marked/lib/marked',
    'angular': '../lib/angular/angular',
    'angular.marked': '../lib/angular-marked/angular-marked',
    'angular.ui.router': '../lib/angular-ui-router/release/angular-ui-router',
    'angular.ui.bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular.marked': {
      deps: ['angular', 'marked']
    },
    'angular.ui.router': ['angular'],
    'angular.ui.bootstrap': ['angular']
  }
});

require(['marked'], function(marked) {
  this.marked = marked;
  this.name = 'NG_DEFER_BOOTSTRAP!';
});

require(['angular', 'app/index'], function (angular, app) {
  console.log('App loaded');
  angular.resumeBootstrap();
  return app;
});
