define([
  'app/util'
], function (Util) {
  'use strict';

  function KeyboardDirective() {
    function Controller() {
      this.keys = Util.range(21, 108);
    }

    return {
      restrict: 'AE',
      controller: Controller,
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
