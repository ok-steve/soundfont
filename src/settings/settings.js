import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { AddNodeEvent } from '../resources/features/tone/events/add-node';

import { SetSynthEvent } from '../resources/events/set-synth';

@inject( EventAggregator )
export class Settings {
  constructor( EventAggregator ) {
    this.ea = EventAggregator;

    this.params = {};

    this.boundOnAddNode = this.onAddNode.bind(this);

    this.ea.subscribe( AddNodeEvent, this.boundOnAddNode );
  }

  onChange( e ) {
    this.ea.publish( new SetSynthEvent( this.params ) );
  }

  onAddNode( e ) {
    this.params[e.data.id] = e.data.defaults;
  }
}
