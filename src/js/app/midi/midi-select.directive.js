'use strict';

import angular from 'angular';

export default function MidiSelectDirective() {
  const directive = {
    restrict: 'EA',
    templateUrl: 'templates/midi/midi-select.directive.html',
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

Controller.$inject = [
  '$scope',
  'midiAccess',
  'midiUtilities'
];

function Controller( $scope, midiAccess, MidiUtil ) {
  const vm = this;

  ////////////////

  function plug( newDevice, oldDevice ) {
    if ( oldDevice ) {
      oldDevice.onmidimessage = null;
    }

    if ( newDevice ) {
      vm.activeDevice.onmidimessage = onmidimessage;
    }
  }

  // TODO make separate factory for midi message
  function onmidimessage( e ) {
    const data = e.data,
      status = data[0],
      data1 = data[1],
      data2 = data[2];

    switch ( status ) {
      case 144: // noteOn
        vm.noteon( MidiUtil.mtof( data1 ), MidiUtil.vtog( data2 ));
      break;

      case 128: // noteOff
        vm.noteoff( MidiUtil.mtof( data1 ));
      break;

      case 176: // control
        console.log( 'control' );
      break;
    }
  }

  midiAccess.request( 'inputs' ).then(devices => {
    vm.hasMIDI = true;

    vm.devices = devices;
  }).catch(error => {
    vm.error = true;

    console.log( error.message );
  });

  $scope.$watch( angular.bind( vm, () => {
    return this.activeDevice;
  }), plug );
}
