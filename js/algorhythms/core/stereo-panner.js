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
    root.AR.StereoPanner = factory(
      root.AR.AudioContext
    );
  }
}(this, function (AudioContext) {

  function StereoPanner(params) {
    var params = params || {},
      node = AudioContext.createStereoPanner();

    node.pan.value = params.pan || 0;

    return node;
  }

  return StereoPanner;
}));
