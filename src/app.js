import { inject } from 'aurelia-framework';

import { KeyboardService } from './resources/services/keyboard-service';
import { SynthService } from './resources/services/synth-service';

@inject( KeyboardService, SynthService )
export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';

    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' },
      { route: 'synth',          name: 'synth',    moduleId: './synth/synth',       nav: true, title: 'Synth'    }
    ]);

    this.router = router;
  }

  constructor( KeyboardService, SynthService ) {
    this.keyboard = KeyboardService;
    this.synth = SynthService;

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
    this.keyboard.onKeypress( e, this.synth.triggerAttack );
  }

  onKeyup( e ) {
    this.keyboard.onKeypress( e, this.synth.triggerRelease );
  }
}
