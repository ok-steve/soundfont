import Tone from 'tone';
import SynthDef from './synth-def';

export const polySynth = new Tone.PolySynth( 10, SynthDef ).toMaster();
