export function configure( aurelia ) {
  aurelia.use
    //.developmentLogging()
    .feature('resources')
    .basicConfiguration();

  aurelia.start().then(() => aurelia.setRoot());
}
