import { inject } from 'aurelia-framework';

import { KeyboardService } from './resources/services/keyboard-service';

@inject( KeyboardService )
export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';
    config.options.pushState = true;

    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' },
      { route: 'piano',          name: 'piano',    moduleId: './piano/piano',       nav: true, title: 'Piano'    }
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
