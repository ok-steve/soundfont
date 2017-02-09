import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { NOTE_ON, NOTE_OFF, toMessage } from '../lib/func/utilities';

@autoinject
export class Piano {
  ea: EventAggregator;

  constructor( ea: EventAggregator ) {
    this.ea = ea;
  }

  sendMessage( status, note ) {
    this.ea.publish( 'midimessage', toMessage(
      status,
      note
    ) );
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
