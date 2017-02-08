import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

import { KeyboardService } from './resources/services/keyboard';
import { SynthService } from './resources/services/synth';

import { routes } from './shell/routes';

@autoinject
export class App {
  public router: Router;
  keyboard: KeyboardService;
  synth: SynthService;

  constructor( keyboard: KeyboardService, synth: SynthService ) {
    this.keyboard = keyboard;
    this.synth = synth;
  }

  configureRouter( config: RouterConfiguration, router: Router ) {
    config.title = 'Synthia';
    config.options.pushState = true;
    config.map( routes );

    this.router = router;
  }

  activate() {
    this.keyboard.bind();
  }

  deactivate() {
    this.keyboard.unbind();
  }
}
