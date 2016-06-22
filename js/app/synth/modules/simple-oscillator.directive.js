define([
  'algorhythms/components/simple-oscillator'
], function (SimpleOscillator) {
  'use strict';

  function Directive() {
    var directive = {
      restrict: 'EA',
      require: '^synthSettings',
      templateUrl: '../templates/synth/modules/simple-oscillator.directive.html',
      scope: {},
      link: link
    };

    return directive;

    /////////////////

    function link(scope, elem, attr, ctrl) {
      ctrl.addNode(attr.id, SimpleOscillator, scope.params, attr.connect);

      scope.types = [
        'sine',
        'square',
        'triangle',
        'sawtooth'
      ];

      scope.filters = [
        'lowpass',
        'highpass'
      ];

      scope.params = {
        osc: {
          type: 'sine'
        },
        filter: {
          type: 'lowpass',
          frequency: 3000
        }
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
