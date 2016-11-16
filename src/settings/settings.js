import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { SET_SYNTH, SynthService } from '../resources/services/synth-service';
import { nodeGraph } from '../resources/node-graph';

@inject( EventAggregator, SynthService )
export class Settings {
  constructor( EventAggregator, SynthService ) {
    this.ea = EventAggregator;
    this.synth = SynthService;

    const defaults = nodeGraph.map(node => {
      return Object.keys(node.defaults).map(key => {
        return `${node.id}.${key}`;
      });
    });

    this.params = this.synth.get(Array.prototype.concat( ...defaults ));
  }

  onChange() {
    this.ea.publish( SET_SYNTH, this.params );
  }
}
