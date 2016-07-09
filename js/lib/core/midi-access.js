'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AR = root.AR || {};

    root.AR.MidiAccess = factory();
  }
}(this, function () {

  function MidiAccess() {
    function connect() {
      if (window.navigator && window.navigator.requestMIDIAccess) {
        return window.navigator.requestMIDIAccess(); // Promise
      } else {
        console.error('No MIDI support');
      }
    }

    function getInputs(access) {
      var devices = [];

      if ('function' === typeof access.inputs) {
        // Deprecated
        devices = access.inputs();
        console.warning('Update your Chrome version!');
      } else {
        if (access.inputs && access.inputs.size > 0) {
          var inputs = access.inputs.values(),
            input;

          for (input = inputs.next(); input && !input.done; input = inputs.next()) {
            devices.push(input.value);
          }
        } else {
          console.warning('No devices detected!');
        }
      }

      return devices;
    }

    return {
      connect: connect,
      getInputs: getInputs
    };
  }

  return MidiAccess;
}));
