import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { NOTE_ON, NOTE_OFF, toMessage } from '../lib/midi';
import { OnmidimessageEvent } from '../resources/events/onmidimessage';

@inject( EventAggregator )
export class Piano {
  constructor( EventAggregator ) {
    this.ea = EventAggregator;
  }

  sendMessage( status, note ) {
    this.ea.publish( new OnmidimessageEvent( toMessage(
      status,
      note
    ) ) );
  }

  onMousedown( e ) {
    const note = e.target.getAttribute('data-midi');

    this.sendMessage( NOTE_ON, note );
  }

  onMouseup( e ) {
    const note = e.target.getAttribute('data-midi');

    this.sendMessage( NOTE_OFF, note );
  }
}
