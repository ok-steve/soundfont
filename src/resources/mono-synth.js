import Tone from 'tone';
import { nodeGraph } from './node-graph';

export class MonoSynth extends Tone.Monophonic {
  constructor( options ) {
    super();

    nodeGraph.forEach(node => {
      this[node.id] = new node.constructor( node.defaults );
    });

    this.frequency = this.oscillator.frequency;
    this.detune = this.oscillator.detune;

    nodeGraph.forEach(node => {
      let to = node.connect.split('.').reduce((o, i) => o[i], this);

      this[node.id].connect( to );
    });

    nodeGraph.filter(node => node.type === 'oscillator').forEach(node => {
      this[node.id].start();
    });

    this.properties = [
      ...nodeGraph.map(node => node.id),
      'frequency',
      'detune'
    ];

    this._readOnly(this.properties);
  }

  _triggerEnvelopeAttack( time, velocity ) {
    nodeGraph.filter(node => node.type === 'envelope').forEach(node => {
      this[node.id].triggerAttack( time, velocity );
      this[node.id].triggerAttack( time );
    });

    return this;
  }

  _triggerEnvelopeRelease( time ) {
    nodeGraph.filter(node => node.type === 'envelope').forEach(node => {
      this[node.id].triggerRelease( time );
      this[node.id].triggerRelease( time );
    });

    return this;
  }

  dispose() {
    this._writable(this.properties);

    nodeGraph.forEach(node => {
      this[node.id].dispose();
      this[node.id] = null;
    });

    this.frequency = null;
    this.detune = null;

    return this;
  }
}
