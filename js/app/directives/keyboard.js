define([
  'app/controllers/keyboard'
], function (KeyboardController) {
  'use strict';

  function KeyboardDirective() {
    return {
      restrict: 'AE',
      controller: KeyboardController,
      controllerAs: 'KeyboardCtrl',
      scope: {},
      bindToController: {
        synth: '='
      },
      templateUrl: '../templates/directives/keyboard.html'
    };
  }

//  KeyboardDirective.$inject = [];

  return KeyboardDirective;
});
