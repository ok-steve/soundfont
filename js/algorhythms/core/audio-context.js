'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AR = root.AR || {};

    root.AR.AudioContext = factory();
  }
}(this, function () {

  var AudioContext = window.AudioContext || window.webkitAudioContext;

  return new AudioContext();
}));
