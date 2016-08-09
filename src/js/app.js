export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';

    config.map([
      { route: ['', 'synth'], name: 'synth',    moduleId: './synth/synth',       nav: true, title: 'Synth'    },
      { route: 'settings',    name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' }
    ]);

    this.router = router;
  }
}
