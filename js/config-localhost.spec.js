requirejs.config({
  paths: {
    angular: 'http://localhost/cdn/angular.js/1.4.8/angular.min',
    ngRoute: 'http://localhost/cdn/angular.js/1.4.8/angular-route.min',

    mocha: 'http://localhost/cdn/mocha/2.3.4/mocha.min',
    chai: 'http://localhost/cdn/chai/3.4.1/chai.min',
    sinon: 'http://localhost/cdn/sinon.js/1.15.4/sinon.min'
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
  deps: ['main.spec']
});
