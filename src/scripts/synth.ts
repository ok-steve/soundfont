import {
  IMIDIMessage,
  MIDIStatus,
} from '../lib/general-midi';

import { PolySynth } from './patches/poly-synth';
import { Soundfont } from './patches/soundfont';

import {
  bus,
  store,
} from './store';

const context = new AudioContext();
const synth = PolySynth.of(context, Soundfont);

store.subscribe((state): void => {
  synth.set('envelope', state.envelope);
  synth.set('type', state.soundfont);
});

bus.subscribe((message: IMIDIMessage): void => {
  switch (message.status) {
    case MIDIStatus.NoteOn:
      synth.start(message.data[0], message.data[1]);
      break;

    case MIDIStatus.NoteOff:
      synth.stop(message.data[0]);
      break;
  }
});
