import { start, stop } from './resources/poly-synth';
import { bind, unbind } from './resources/keyboard-input';

export class App {
  configureRouter( config, router ) {
    config.title = 'Synthia';

    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' },
      { route: 'synth',          name: 'synth',    moduleId: './synth/synth',       nav: true, title: 'Synth'    }
    ]);

    this.router = router;
  }

  activate() {
    bind( start, stop );
  }

  deactivate() {
    unbind();
  }
}
