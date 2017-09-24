import { PolySynth } from './patches/poly-synth';
import { Soundfont } from './patches/soundfont';

import {
  bus,
  store,
} from './store';

const context = new AudioContext();
const synth = PolySynth.of(context, Soundfont);

store.subscribe((state) => {
  synth.set('envelope', state.envelope);
  synth.set('type', state.soundfont);
});

bus.subscribe((message) => {
  switch (message.status) {
    case 144:
      synth.start(message.data[0], message.data[1]);
      break;

    case 128:
      synth.stop(message.data[0]);
      break;
  }
});
