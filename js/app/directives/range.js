define([
], function () {
  'use strict';

  function RangeDirective() {
    function Controller() {

    }

    return {
      restrict: 'AE',
      controller: Controller,
      controllerAs: 'Ctrl',
      scope: {},
      bindToController: {
        id: '@',
        ngModel: '=',
        label: '@',
        min: '@',
        max: '@'
      },
      templateUrl: 'templates/directives/range.html'
    };
  }

//  RangeDirective.$inject = [];

  return RangeDirective;
});
