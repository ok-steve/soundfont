import Tone from 'tone';

export const nodeGraph = [{
  id: 'oscillator',
  type: 'oscillator',
  connect: 'filter',
  constructor: Tone.OmniOscillator,
  defaults: {
    type: 'square'
  }
}, {
  id: 'envelope',
  type: 'envelope',
  connect: 'output',
  constructor: Tone.AmplitudeEnvelope,
  defaults: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.9,
    release: 1
  }
}, {
  id: 'filter',
  type: 'filter',
  connect: 'envelope',
  constructor: Tone.Filter,
  defaults: {
    Q: 6,
    type: 'lowpass',
    rolloff: -24
  }
}, {
  id: 'filterEnvelope',
  type: 'envelope',
  connect: 'filter.frequency',
  constructor: Tone.FrequencyEnvelope,
  defaults: {
    attack: 0.06,
    decay: 0.2,
    sustain: 0.5,
    release: 2,
    baseFrequency: 200,
    octaves: 7,
    exponent: 2
  }
}];
