'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'algorhythms/core/audio-context'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('algorhythms/core/audio-context')
    );
  } else {
    root.AR.Gain = factory(
      root.AR.AudioContext
    );
  }
}(this, function (AudioContext) {

  function Gain(params) {
    var params = params || {},
      node = AudioContext.createGain();

    node.gain.value = params.gain || 1;

    return node;
  }

  return Gain;
}));
