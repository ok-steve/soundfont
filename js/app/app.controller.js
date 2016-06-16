define([
  'algorhythms/components/synth',
  'algorhythms/core/midi',
  'algorhythms/utilities/midi'
], function (Synth, MIDIAccess, MIDI) {
  'use strict';

  function Controller() {
    var access = new MIDIAccess(),
      vm = this;

    vm.synth = new Synth();

    access.connect().then(function (midi) {
      var device = access.getDevices(midi)[0];
      console.log(access.getDevices(midi));

      device.onmidimessage = function (message) {
        var data = message.data,
          type = data[0],
          note = data[1],
          velocity = data[2];

        if (type === 144) { // noteOn
          vm.synth.noteOn(MIDI.mtof(note), velocity / 127.0);
        } else if (type === 128) { // noteOff
          vm.synth.noteOff();
        }
      }
    });
  };

  return Controller;
});
