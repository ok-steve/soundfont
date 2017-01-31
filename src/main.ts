import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    //.developmentLogging()
    .feature('resources/features/tone')
    .feature('resources/features/webmidi')
    .standardConfiguration();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

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
