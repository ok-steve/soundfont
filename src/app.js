import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { KeyboardService } from './resources/services/keyboard-service';
import { SynthService } from './resources/services/synth-service';

import { toMessage } from './lib/midi';
import { OnmidimessageEvent } from './resources/events/onmidimessage';

import { routes } from './shell/routes';

@inject( EventAggregator, KeyboardService, SynthService )
export class App {
  constructor( EventAggregator, KeyboardService, SynthService ) {
    this.ea = EventAggregator;
    this.keyboard = KeyboardService;
    this.synth = SynthService;
  }

  configureRouter( config, router ) {
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
