import { inject } from 'aurelia-framework';

import { KeyboardService } from './resources/services/keyboard-service';

@inject( KeyboardService )
export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';

    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' },
      { route: 'synth',          name: 'synth',    moduleId: './synth/synth',       nav: true, title: 'Synth'    }
    ]);

    this.router = router;
  }

  constructor( KeyboardService ) {
    this.keyboard = KeyboardService;
  }

  activate() {
    this.keyboard.bind();
  }

  deactivate() {
    this.keyboard.unbind();
  }
}
