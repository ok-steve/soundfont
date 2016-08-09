export function configure( aurelia ) {
  aurelia.use
    //.developmentLogging()
    .standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot());
}

if ( navigator.hasOwnProperty('serviceWorker') ) {
  navigator.serviceWorker.register( '/service-worker.js', {
    scope: '/'
  }).then(response => {
    console.log( response );
  }).catch(error => {
    console.log( error );
  });
}
