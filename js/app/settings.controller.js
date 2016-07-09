define([
  'angular'
], function (angular) {
  'use strict';

  Controller.$inject = [
    '$scope',
    'polySynth'
  ];

  function Controller($scope, polySynth) {
    var vm = this;

    vm.oscillators = [
      'sine',
      'square',
      'triangle',
      'sawtooth'
    ];

    vm.filters = [
      'lowpass',
      'highpass',
      'bandpass',
      'lowshelf',
      'highshelf',
      'notch',
      'allpass',
      'peaking'
    ];

    vm.rolloffs = [
      -12,
      -24,
      -48,
      -96
    ];

    vm.params = {
      oscillator: {
        type: 'square'
      },
      filter: {
        Q: 6,
        type: 'lowpass',
        rolloff: -24
      },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.9,
        release: 1
      },
      frequencyEnvelope: {
        attack: 0.06,
        decay: 0.2,
        sustain: 0.5,
        release: 2,
        baseFrequency: 200,
        octaves: 7,
        exponent: 2
      }
    };

    $scope.$watch(angular.bind(vm, function () {
      return this.params;
    }), function (params) {
      polySynth.set(params);
    }, true);
  }

  return Controller;
});
