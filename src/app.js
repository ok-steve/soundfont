import { inject } from 'aurelia-framework';

import { midiToNote, velocityToGain } from './lib/utilities';

import { MidimessageService } from './resources/services/midimessage';
import { ShortcutService } from './resources/services/shortcut';
import { SynthService } from './resources/services/synth';

@inject(MidimessageService, ShortcutService, SynthService)
export class App {
  octave = 4;

  constructor(midi, shortcut, synth) {
    this.midi = midi;
    this.shortcut = shortcut;
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

  setOctave(e) {
    this.octave = parseInt(e.target.value, 10);
    this.shotcut.octave = this.octave;
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
