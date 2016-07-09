define([], function () {
  'use strict';

  Controller.$inject = [
    '$scope',
    'polySynth',
    'keyboardInput'
  ];

  function Controller($scope, polySynth, keyboardInput) {
    var vm = this;

    vm.synth = polySynth;

    /////////////////////

    keyboardInput.bind(vm.synth.noteOn, vm.synth.noteOff);

    $scope.$on('$destroy', function () {
      keyboardInput.unbind();
    });
  };

  return Controller;
});
