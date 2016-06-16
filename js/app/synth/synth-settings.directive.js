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

  Controller.$inject = [
    '$scope',
    'synthDef'
  ];

  function Controller($scope, synthDef) {
    var vm = this;

    vm.addNode = function (id, node, params) {
      synthDef.addNode(id, node, params);
    };

    vm.setParams = function (id, params) {
      synthDef.setParams(id, params);
    };
  }

  return Directive;
});
