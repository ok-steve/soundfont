var require = {
  // baseUrl: '/js',
  paths: {
    angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min',
    ngRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.min',

    mocha: 'https://cdnjs.cloudflare.com/ajax/libs/mocha/2.4.5/mocha.min',
    chai: 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min',
    sinon: 'https://cdnjs.cloudflare.com/ajax/libs/sinon/1.15.4/sinon.min'
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
