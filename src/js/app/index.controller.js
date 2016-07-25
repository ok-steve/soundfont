'use strict';

export default function IndexController( $scope, polySynth, keyboardInput ) {
  const vm = this;

  vm.start = function( freq ) {
    polySynth.triggerAttack( freq );
  };

  vm.stop = function( freq ) {
    polySynth.triggerRelease( freq );
  };

  /////////////////////////////////

  keyboardInput.bind( vm.start, vm.stop );

  $scope.$on( '$destroy', () => {
    keyboardInput.unbind();
  });
};

IndexController.$inject = [
  '$scope',
  'polySynth',
  'keyboardInput'
];

