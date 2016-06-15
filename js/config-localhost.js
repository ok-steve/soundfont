var require = {
  // baseUrl: '/js',
  paths: {
    angular: '../bower_components/angular/angular.min',
    ngRoute: '../bower_components/angular-route/angular-route.min',

    mocha: '../bower_components/mocha/mocha',
    chai: '../bower_components/chai/chai',
    sinon: '../bower_components/sinon/lib/sinon'
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
