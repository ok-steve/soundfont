import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';

import { KeyboardService } from './resources/services/keyboard-service';
import { SynthService } from './resources/services/synth-service';

import { toMessage } from './lib/midi';
import { OnmidimessageEvent } from './resources/events/onmidimessage';

import { routes } from './shell/routes';

@inject( EventAggregator, Router, KeyboardService, SynthService )
export class App {
  constructor( EventAggregator, Router, KeyboardService, SynthService ) {
    this.ea = EventAggregator;
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

  onMidimessage( e ) {
    this.ea.publish( new OnmidimessageEvent( toMessage( ...e.data ) ) );
  }
}
