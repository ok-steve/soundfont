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
    root.AR.Oscillator = factory(
      root.AR.AudioContext
    );
  }
}(this, function (AudioContext) {

  function Oscillator(params) {
    var params = params || {},
      node = AudioContext.createOscillator();

    node.frequency.value = params.frequency || 440;
    node.detune.value = params.detune || 0;
    node.type = params.type || 'sine';

    return node;
  }

  return Oscillator;
}));
