import { Monophonic } from 'tone';

export class MonoSynth extends Monophonic {
  constructor( options ) {
    super();

    this.options = options;

    this.options.forEach(node => {
      this[node.id] = new node.constructor( node.defaults );
    });

    if ( this.oscillator ) {
      this.frequency = this.oscillator.frequency;
      this.detune = this.oscillator.detune;
    }

    this.options.forEach(node => {
      let to = node.connect.split('.').reduce((o, i) => o[i], this);

      this[node.id].connect( to );
    });

    this.options.filter(node => node.type === 'oscillator').forEach(node => {
      this[node.id].start();
    });

    this.properties = [
      ...this.options.map(node => node.id),
      'frequency',
      'detune'
    ];

    this._readOnly( this.properties );
  }

  _triggerEnvelopeAttack( time, velocity ) {
    this.options.filter(node => node.type === 'envelope').forEach(node => {
      this[node.id].triggerAttack( time, velocity );
      this[node.id].triggerAttack( time );
    });

    return this;
  }

  _triggerEnvelopeRelease( time ) {
    this.options.filter(node => node.type === 'envelope').forEach(node => {
      this[node.id].triggerRelease( time );
      this[node.id].triggerRelease( time );
    });

    return this;
  }

  dispose() {
    this._writable( this.properties );

    this.options.forEach(node => {
      this[node.id].dispose();
      this[node.id] = null;
    });

    this.frequency = null;
    this.detune = null;

    return this;
  }
}
