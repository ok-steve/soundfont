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
    root.AR.Delay = factory(
      root.AR.AudioContext
    );
  }
}(this, function (AudioContext) {

  function Delay(params) {
    var params = params || {},
      node = AudioContext.createDelay(params.delay || 0);

    return node;
  }

  return Delay;
}));
