System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  map: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.min'
  },
  meta: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    }
  }
});

window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;
