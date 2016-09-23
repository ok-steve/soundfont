import { inject } from 'aurelia-framework';

import { SynthService } from '../resources/services/synth-service';
import { nodeGraph } from '../resources/node-graph';

@inject( SynthService )
export class Settings {
  constructor( SynthService ) {
    this.synth = SynthService;

    const defaults = nodeGraph.map(node => {
      return Object.keys(node.defaults).map(key => {
        return `${node.id}.${key}`;
      });
    });

    this.params = this.synth.get(Array.prototype.concat( ...defaults ));
  }

  onChange() {
    this.synth.set( this.params );
  }
}
