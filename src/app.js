import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { KeyboardService } from './resources/services/keyboard-service';

import { routes } from './shell/routes';

@inject( Router, KeyboardService )
export class App {
  constructor( Router, KeyboardService ) {
    this.router = Router;
    this.router.configure( routes );

    this.keyboard = KeyboardService;
  }

  activate() {
    this.keyboard.bind();
  }

  deactivate() {
    this.keyboard.unbind();
  }
}
