define([], function () {
  'use strict';

  Controller.$inject = [
    'polySynth',
    'keyboardInput'
  ];

  function Controller(polySynth, keyboardInput) {
    var vm = this;

    vm.synth = polySynth;

    /////////////////////

    keyboardInput.onkeydown(vm.synth.noteOn);
    keyboardInput.onkeyup(vm.synth.noteOff);
  };

  return Controller;
});
