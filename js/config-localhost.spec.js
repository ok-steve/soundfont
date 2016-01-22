requirejs.config({
  paths: {
    angular: '../bower_components/angular/angular.min',
    ngRoute: '../bower_components/angular-route/angular-route.min',

    mocha: '../bower_components/mocha/mocha.min',
    chai: '../bower_components/chai/chai.min',
    sinon: '../bower_components/sinon/sinon.min'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    },

    mocha: {
      init: function () {
        'use strict';

        this.mocha.setup('bdd');

        return this.mocha;
      }
    }
  }
  deps: ['spec']
});
