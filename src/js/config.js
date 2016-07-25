System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  map: {
    'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min',

    'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min',
    'angular-animate': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min',
    'angular-aria': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-aria.min',
    'angular-route': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.min',
    'angular-material': 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.8/angular-material.min',

    'keyboardjs': 'https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.2.1/keyboard.min',
    'tone': 'http://tonejs.github.io/CDN/latest/Tone.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'web-midi-api': 'http://cwilso.github.com/WebMIDIAPIShim/WebMIDIAPI.min'
  },
  meta: {
    'angular': {
      exports: 'angular',
      format: 'global'
    },
    'angular-animate': {
      deps: [
        'angular'
      ]
    },
    'angular-aria': {
      deps: [
        'angular'
      ]
    },
    'angular-route': {
      deps: [
        'angular'
      ]
    },

    'angular-material': {
      deps: [
        'angular',
        'angular-animate',
        'angular-aria'
      ]
    },

    'keyboardjs': {
      exports: 'keyboardJS'
    },
    'tone': {
      exports: 'Tone'
    },
    'underscore': {
      exports: '_'
    }
  },
  transpiler: 'babel'
});
