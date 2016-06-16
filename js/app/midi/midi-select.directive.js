define([
  'angular',
  'algorhythms/utilities/midi'
], function (angular, MidiUtil) {
  'use strict';

  function Directive() {
    var directive = {
      restrict: 'EA',
      templateUrl: '../templates/midi/midi-select.directive.html',
      scope: {
        noteon: '=',
        noteoff: '='
      },
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  Controller.$inject = ['$scope', 'midiAccess'];

  function Controller($scope, midiAccess) {
    var vm = this;

    //////////////

    function plug(newDevice, oldDevice) {
      if (oldDevice) {
        oldDevice.onmidimessage = null;
      }

      if (newDevice) {
        vm.activeDevice.onmidimessage = onmidimessage;
      }
    }

    // TODO make separate factory for midi message
    function onmidimessage(e) {
      var data = e.data,
        type = data[0],
        note = data[1],
        velocity = data[2];

      switch (type) {
        case 144: // noteOn
          vm.noteon(MidiUtil.mtof(note), MidiUtil.vtog(velocity));
        break;

        case 128: // noteOff
          vm.noteoff(MidiUtil.mtof(note));
        break;

        case 224: // detune
          console.log('detune');
        break;
      }
    }

    midiAccess.connect().then(function (access) {
      vm.devices = midiAccess.getInputs(access);
    }).catch(function (e) {
      console.error(e);
    });

    // TODO move to factory
    $scope.$watch(angular.bind(vm, function () {
      return this.activeDevice;
    }), plug);
  }

  return Directive;
});
