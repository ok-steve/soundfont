requirejs({
  paths: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.min'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    }
  },
  deps: ['app']
});
