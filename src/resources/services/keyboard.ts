import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { NOTE_ON, NOTE_OFF, toMessage } from '../../lib/midi';

const keys = ['a','w','s','e','d','f','t','g','y','h','u','j'];

const keyToNote = ( key ) => {
  const pitch = keys.indexOf( key );
  const octave = 5;

  return (pitch + (12 * octave));
};

@autoinject
export class KeyboardService {
  ea: EventAggregator;
  boundOnKeypress: EventListener;

  constructor( ea: EventAggregator ) {
    this.ea = ea;

    this.boundOnKeypress = this.onKeypress.bind(this);
  }

  bind() {
    window.addEventListener( 'keydown', this.boundOnKeypress );
    window.addEventListener( 'keyup', this.boundOnKeypress );
  }

  unbind() {
    window.removeEventListener( 'keydown', this.boundOnKeypress, false );
    window.removeEventListener( 'keyup', this.boundOnKeypress, false );
  }

  onKeypress( e ) {
    const key = e.key;

    if ( keys.indexOf( key ) !== -1 && !e.repeat ) {
      let status;

      const note = keyToNote( key );

      switch( e.type ) {
        case 'keydown':
          status = NOTE_ON;
          break;
        case 'keyup':
          status = NOTE_OFF;
          break;
      }

      this.ea.publish( 'midimessage', toMessage(
        status,
        note
      ) );
    }
  }
}
