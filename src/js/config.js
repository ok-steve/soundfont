System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  paths: {
    'cdnjs:*': 'https://cdnjs.cloudflare.com/ajax/libs/*'
  },
  map: {
    'babel': 'cdnjs:babel-core/5.8.34/browser.min',

    'keyboardjs': 'cdnjs:keyboardjs/2.2.1/keyboard.min',
    'tone': 'http://tonejs.github.io/CDN/latest/Tone.min',
    'underscore': 'cdnjs:underscore.js/1.8.3/underscore-min',
    'web-midi-api': 'http://cwilso.github.com/WebMIDIAPIShim/WebMIDIAPI.min'
  },
  babelOptions: {
    stage: 1
  },
  transpiler: 'babel'
});
