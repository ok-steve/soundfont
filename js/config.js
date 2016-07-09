System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  map: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min',
    ngAnimate: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min',
    ngAria: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-aria.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-route.min',

    ngMaterial: 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.min',
  },
  meta: {
    angular: {
      exports: 'angular',
      format: 'global'
    },
    ngAnimate: {
      deps: [
        'angular'
      ]
    },
    ngAria: {
      deps: [
        'angular'
      ]
    },
    ngRoute: {
      deps: [
        'angular'
      ]
    },

    ngMaterial: {
      deps: [
        'angular',
        'ngAnimate',
        'ngAria'
      ]
    }
  }
});

window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;
