define([
], function () {
  'use strict';

  function MIDIAccess() {
  }

  MIDIAccess.prototype.connect = function  () {
    if (window.navigator && window.navigator.requestMIDIAccess) {
      return window.navigator.requestMIDIAccess(); // Promise
    } else {
      console.error('No MIDI support');
    }
  }

  MIDIAccess.prototype.getDevices = function (midi) {
    if (midi.inputs && midi.inputs.size > 0) {
      var devices = [],
        inputs = midi.inputs.values(),
        input;

      for (input = inputs.next(); input && !input.done; input = inputs.next()) {
        devices.push(input.value);
      }

      return devices;
    }
  }

  return MIDIAccess;
});
