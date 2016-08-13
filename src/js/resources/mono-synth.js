import Tone from 'tone';
import { extend } from './utilities/underscore';

export class MonoSynth extends Tone.Monophonic {
  constructor( options ) {
    super();

    options = extend( options || {}, this.defaults );

    this.oscillator = new Tone.OmniOscillator( options.oscillator );
    this.filter = new Tone.Filter( options.filter );
    this.filterEnvelope = new Tone.FrequencyEnvelope( options.filterEnvelope );
    this.envelope = new Tone.AmplitudeEnvelope( options.envelope );

    this.frequency = this.oscillator.frequency;
    this.detune = this.oscillator.detune;

    this.oscillator.chain( this.filter, this.envelope, this.output );
    this.filterEnvelope.connect( this.filter.frequency );

    this.oscillator.start();

    this._readOnly([
      'oscillator',
      'frequency',
      'detune',
      'filter',
      'filterEnvelope',
      'envelope'
    ]);
  }

  defaults = {
    'frequency': 'C4',
    'detune': 0,
    'oscillator': {
      'type': 'square'
    },
    'filter': {
      'Q': 6,
      'type': 'lowpass',
      'rolloff': -24
    },
    'envelope': {
      'attack': 0.005,
      'decay': 0.1,
      'sustain': 0.9,
      'release': 1
    },
    'filterEnvelope': {
      'attack': 0.06,
      'decay': 0.2,
      'sustain': 0.5,
      'release': 2,
      'baseFrequency': 200,
      'octaves': 7,
      'exponent': 2
    }
  };

  _triggerEnvelopeAttack( time, velocity ) {
    this.envelope.triggerAttack( time, velocity );
    this.filterEnvelope.triggerAttack( time );

    return this;
  }

  _triggerEnvelopeRelease( time ) {
    this.envelope.triggerRelease( time );
    this.filterEnvelope.triggerRelease( time );

    return this;
  }

  dispose() {
    this._writable([
      'oscillator',
      'frequency',
      'detune',
      'filter',
      'filterEnvelope',
      'envelope'
    ]);

    this.oscillator.dispose();
    this.oscillator = null;

    this.envelope.dispose();
    this.envelope = null;

    this.filterEnvelope.dispose();
    this.filterEnvelope = null;

    this.filter.dispose();
    this.filter = null;

    this.frequency = null;
    this.detune = null;

    return this;
  }
}
