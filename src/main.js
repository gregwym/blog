require.config({
  baseUrl: '/src',
  paths: {
    'angular': '../lib/angular/angular',
    'jquery': '../lib/jquery/jquery',
    'bootstrap': '../lib/bootstrap/dist/js/bootstrap',
    'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'jquery': {
      exports: '$'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    },
    'angular-bootstrap': {
      deps: ['bootstrap']
    }
  }
});

define(['app/index'], function(index) {
  console.log('App loaded');
  return index;
});
