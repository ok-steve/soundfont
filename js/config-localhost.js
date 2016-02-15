var require = {
  // baseUrl: '/js',
  paths: {
    angular: '../bower_components/angular/angular.min',
    ngRoute: '../bower_components/angular-route/angular-route.min',

    underscore: '../bower_components/underscore/underscore-min',

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

    underscore: {
      exports: '_'
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
