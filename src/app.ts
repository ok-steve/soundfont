import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouterConfiguration } from 'aurelia-router';

import { KeyboardService } from './resources/services/keyboard';
import { SynthService } from './resources/services/synth';

import { toMessage } from './lib/midi';
import { OnmidimessageEvent } from './resources/events/onmidimessage';

import { routes } from './shell/routes';

@autoinject
export class App {
  public router: Router;
  ea: EventAggregator;
  keyboard: KeyboardService;
  synth: SynthService;

  constructor( ea: EventAggregator, keyboard: KeyboardService, synth: SynthService ) {
    this.ea = ea;
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

  onMidimessage( e ) {
    this.ea.publish( new OnmidimessageEvent( toMessage( ...e.data ) ) );
  }
}
