define([
  'app/controllers/range'
], function (RangeController) {
  'use strict';

  function RangeDirective() {
    return {
      restrict: 'AE',
      controller: RangeController,
      controllerAs: 'RangeCtrl',
      scope: {},
      bindToController: {
        id: '@',
        ngModel: '=',
        label: '@',
        min: '@',
        max: '@'
      },
      templateUrl: '../templates/directives/range.html'
    };
  }

//  RangeDirective.$inject = [];

  return RangeDirective;
});
