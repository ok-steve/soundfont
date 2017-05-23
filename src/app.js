import { inject } from 'aurelia-framework';

import { midiToNote, velocityToGain } from './lib/utilities';

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

  setSoundfont( e ) {
    this.synth.set({
      player: {
        type: e.target.value
      }
    });
  }

  triggerSynth( message ) {
    switch( message.status ) {
      case 144:
        this.synth.triggerAttack( midiToNote( message.data[0] ), velocityToGain( message.data[1] ) );
        break;

      case 128:
        this.synth.triggerRelease( midiToNote( message.data[0] ) );
        break;
    }
  }
}
