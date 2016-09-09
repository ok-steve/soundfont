import { polySynth } from '../resources/poly-synth';
import { nodeGraph } from '../resources/node-graph';

export class Settings {
  constructor() {
    const defaults = nodeGraph.map(node => {
      return Object.keys(node.defaults).map(key => {
        return `${node.id}.${key}`;
      });
    });

    this.params = polySynth.get(Array.prototype.concat( ...defaults ));
  }

  onChange() {
    polySynth.set( this.params );
  }
}
