define([], function () {
  'use strict';

  Controller.$inject = [
    '$scope',
    'polySynth',
    'keyboardInput'
  ];

  function Controller($scope, polySynth, keyboardInput) {
    var vm = this;

    vm.start = function (freq) {
      polySynth.triggerAttack(freq);
    };

    vm.stop = function (freq) {
      polySynth.triggerRelease(freq);
    };

    /////////////////////////////////

    keyboardInput.bind(vm.start, vm.stop);

    $scope.$on('$destroy', function () {
      keyboardInput.unbind();
    });
  };

  return Controller;
});
