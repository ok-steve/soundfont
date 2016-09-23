import { inject } from 'aurelia-framework';
import { start, stop } from './resources/poly-synth';

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

    this.boundOnKeydown = this.onKeydown.bind( this );
    this.boundOnKeyup = this.onKeyup.bind( this );
  }

  activate() {
    window.addEventListener('keydown', this.boundOnKeydown, false);
    window.addEventListener('keyup', this.boundOnKeyup, false);
  }

  deactivate() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  onKeydown( e ) {
    this.keyboard.onKeypress( e, start );
  }

  onKeyup( e ) {
    this.keyboard.onKeypress( e, stop );
  }
}
