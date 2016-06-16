require([
  'angular',
  'app/app.module'
], function (angular) {
  'use strict';

  if (navigator.hasOwnProperty('serviceWorker')) {
    navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    });
  }

  angular.bootstrap(document, ['app']);
});
