import { polySynth } from '../resources/poly-synth';

export class Settings {
  oscillatorTypes = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];

  filterTypes = [
    'lowpass',
    'highpass',
    'bandpass',
    'lowshelf',
    'highshelf',
    'notch',
    'allpass',
    'peaking'
  ];

  rolloffs = [
    -12,
    -24,
    -48,
    -96
  ];

  params = polySynth.get([
    'oscillator.type',
    'filter.Q',
    'filter.type',
    'filter.rolloff',
    'envelope.attack',
    'envelope.decay',
    'envelope.sustain',
    'envelope.release',
    'filterEnvelope.attack',
    'filterEnvelope.decay',
    'filterEnvelope.sustain',
    'filterEnvelope.release',
    'filterEnvelope.baseFrequency',
    'filterEnvelope.octaves',
    'filterEnvelope.exponent'
  ]);

  onChange() {
    polySynth.set( this.params );
  }
}
