requirejs({
  paths: {
    angular: 'http://localhost/cdn/angular.js/1.4.8/angular.min',
    ngRoute: 'http://localhost/cdn/angular.js/1.4.8/angular-route.min'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    }
  },
  deps: ['main']
});
