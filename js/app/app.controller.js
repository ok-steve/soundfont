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

    keyboardInput.bind(vm.synth.noteOn, vm.synth.noteOff);
  };

  return Controller;
});
