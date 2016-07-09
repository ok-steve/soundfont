System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  map: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min',
    ngAnimate: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min',
    ngAria: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-aria.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-route.min',

    ngMaterial: 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.min',

    keyboard: 'https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.2.1/keyboard.min',
    tone: 'http://cdn.tonejs.org/latest/Tone.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
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
    },

    keyboard: {
      exports: 'keyboardJS'
    },
    tone: {
      exports: 'Tone'
    },
    underscore: {
      exports: '_'
    }
  }
});

window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;
