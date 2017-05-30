export function configure(aurelia) {
  aurelia.use
    //.developmentLogging()
    .feature('resources')
    .basicConfiguration();

  aurelia.start().then(() => aurelia.setRoot());
}

if (navigator.serviceWorker !== undefined) {
  navigator.serviceWorker.register('/service-worker.js', {
    scope: '/'
  })
  .then(console.log)
  .catch(console.log);
}
