import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { KeyboardService } from './resources/services/keyboard-service';
import { SynthService } from './resources/services/synth-service';

import { routes } from './shell/routes';

@inject( Router, KeyboardService, SynthService )
export class App {
  constructor( Router, KeyboardService, SynthService ) {
    this.router = Router;
    this.keyboard = KeyboardService;
    this.synth = SynthService;

    this.router.configure( routes );
  }

  activate() {
    this.keyboard.bind();
  }

  deactivate() {
    this.keyboard.unbind();
  }
}
