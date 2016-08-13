import Tone from 'tone';
import { MonoSynth } from './mono-synth';

export const polySynth = new Tone.PolySynth( 10, MonoSynth ).toMaster();
