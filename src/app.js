import { routes } from './shell/routes';

export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';
    config.options.pushState = true;
    config.map( routes );

    this.router = router;
  }
}
