define([
  'algorhythms/component/synth'
], function (Synth) {
  'use strict';

  Controller.$inject = [
    'keyboardInput'
  ];

  function Controller(keyboardInput) {
    var vm = this;

    vm.synth = new Synth();

    /////////////////////

    keyboardInput.onkeydown(vm.synth.noteOn);
    keyboardInput.onkeyup(vm.synth.noteOff);
  };

  return Controller;
});
