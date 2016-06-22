define([
  'algorhythms/synth-def'
], function (SynthDef) {
  'use strict';

  function Factory() {
    var factory = {
        init: init,
        addNode: addNode,
        setParams: setParams,
        start: start,
        stop: stop
      },
      nodes = {};

    return factory;

    ///////////////

    function init() {
      return new SynthDef(nodes);
    }

    function addNode(id, node, params, connect) {
      nodes[id] = {
        proto: node,
        params: params,
        connect: connect
      };
    }

    function setParams(id, params) {
      nodes[id].params = params;
    }

    function start(voice, freq, gain) {
      voice.start(freq, gain);
    }

    function stop(voice) {
      voice.stop();
    }
  }

  return Factory;
});
