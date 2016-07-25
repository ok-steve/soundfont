'use strict';

import angular from 'angular';

import './app/app.module';

if ( navigator.hasOwnProperty('serviceWorker') ) {
  navigator.serviceWorker.register( '/service-worker.js', {
    scope: '/'
  }).then(response => {
    console.log( response );
  }).catch(error => {
    console.log( error );
  });
}

angular.bootstrap( document, [
  'app'
]);
