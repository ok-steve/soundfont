import Tone from 'tone';

import { MonoSynth } from './mono-synth';

export const polySynth = new Tone.PolySynth( 10, MonoSynth ).toMaster();

export const start = ( freq, gain = 1 ) => {
  polySynth.triggerAttack( freq, gain );
};

export const stop = ( freq ) => {
  polySynth.triggerRelease( freq );
};
