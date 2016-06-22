define([
  'algorhythms/components/to-master'
], function (ToMaster) {
  'use strict';

  function Directive() {
    var directive = {
      restrict: 'EA',
      require: '^synthSettings',
      templateUrl: '../templates/synth/modules/to-master.directive.html',
      scope: {},
      link: link
    };

    return directive;

    /////////////////

    function link(scope, elem, attr, ctrl) {
      ctrl.addNode(attr.id, ToMaster, scope.params);

      scope.params = {
        gain: 1
      };

      function setParams(params) {
        ctrl.setParams(attr.id, params);
      }

      scope.$watch(angular.bind(scope, function () {
        return this.params;
      }), setParams, true);
    }
  }

  return Directive;
});
