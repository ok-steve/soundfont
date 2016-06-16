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
    root.AR.BiquadFilter = factory(
      root.AR.AudioContext
    );
  }
}(this, function (AudioContext) {

  function BiquadFilter(params) {
    var params = params || {},
      node = AudioContext.createBiquadFilter();

    if (!params.type) {
      console.error('Params must include `type`!');
    }

    node.frequency.value = params.frequency || 350;
    node.detune.value = params.detune || 0;
    node.Q.value = params.Q || 1;
    node.type = params.type;

    return node;
  }

  return BiquadFilter;
}));
