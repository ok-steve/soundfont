define([
  'algorhythms/components/synth'
], function (Synth) {
  'use strict';

  function IndexController() {
    this.synth = new Synth();
  }

//  IndexController.$inject = [];

  return IndexController;
});
