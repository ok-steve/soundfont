import { inject } from 'aurelia-framework';

import { mtof, vtog } from './lib/func/utilities';

import { MidimessageService } from './resources/services/midimessage';
import { SynthService } from './resources/services/synth';

@inject( MidimessageService, SynthService )
export class App {
  constructor( midi, synth ) {
    this.midi = midi;
    this.synth = synth;

    this.title = 'Synthia';

    this.boundTriggerSynth = this.triggerSynth.bind(this);

    this.midi.midimessage.subscribe( this.boundTriggerSynth );
  }

  onMidimessage( e ) {
    this.triggerSynth( e.detail );
  }

  triggerSynth( message ) {
    switch( message.status ) {
      case 144:
        this.synth.triggerAttack( mtof( message.data[0] ), vtog( message.data[1] ) );
        break;

      case 128:
        this.synth.triggerRelease( mtof( message.data[0] ) );
        break;
    }
  }
}
