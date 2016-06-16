define([
  'angular'
], function (angular) {
  'use strict';

  function Directive() {
    var directive = {
      restrict: 'EA',
      templateUrl: '../templates/synth/synth-settings.directive.html',
      scope: {},
      controller: Controller,
      controllerAs: 'vm'
    };

    return directive;

    /////////////////
  }

  Controller.$inject = ['$scope', 'synthDef'];

  function Controller($scope, synthDef) {
    var vm = this;

    vm.types = ['sine', 'square', 'triangle', 'sawtooth'];
    vm.filters = ['lowpass', 'highpass'];

    vm.config = {
      osc: {
        type: 'sine'
      },
      filter: {
        type: 'lowpass',
        frequency: 3000
      }
    };

    ////////////////

    $scope.$watch(angular.bind(vm, function () {
      return this.config;
    }), synthDef.setParams, true);
  }

  return Directive;
});
