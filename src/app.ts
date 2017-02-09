import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

import { routes } from './shell/routes';

@autoinject
export class App {
  public router: Router;

  configureRouter( config: RouterConfiguration, router: Router ) {
    config.title = 'Synthia';
    config.options.pushState = true;
    config.map( routes );

    this.router = router;
  }
}
