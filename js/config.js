var require = {
  paths: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.min',

    mocha: 'https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min',
    chai: 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.4.1/chai.min',
    sinon: 'https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.15.4/sinon.min'
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
};
