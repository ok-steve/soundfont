require([
  'angular',
  'app/app.module'
], function (angular) {
  'use strict';

  if (navigator.hasOwnProperty('serviceWorker')) {
    navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    }).then(response => {
      console.log(reponse);
    }).catch(error => {
      console.log(error);
    });
  }

  angular.bootstrap(document, [
    'app'
  ]);
});
