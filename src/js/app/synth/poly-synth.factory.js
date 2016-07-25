'use strict';

import Tone from 'tone';

import SynthDef from '../../lib/synth-def';

export default function PolySynthFactory() {
  const factory = new Tone.PolySynth( 10, SynthDef ).toMaster();

  return factory;
}
