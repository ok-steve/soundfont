import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { has } from '../../lib/underscore';

import { NOTE_ON, NOTE_OFF, ONMIDIMESSAGE, MidiService } from './midi-service';

const keyMap = {
  'a': 60,
  'w': 61,
  's': 62,
  'e': 63,
  'd': 64,
  'f': 65,
  't': 66,
  'g': 67,
  'y': 68,
  'h': 69,
  'u': 70,
  'j': 71,
  'k': 72
};

@inject( EventAggregator, MidiService )
export class KeyboardService {
  constructor( EventAggregator, MidiService ) {
    this.ea = EventAggregator;
    this.midi = MidiService;

    this.boundOnKeypress = this.onKeypress.bind( this );
  }

  bind() {
    window.addEventListener( 'keydown', this.boundOnKeypress, false );
    window.addEventListener( 'keyup', this.boundOnKeypress, false );
  }

  unbind() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  onKeypress( e ) {
    if ( has( keyMap, e.key ) && !e.repeat ) {
      let status;

      switch( e.type ) {
        case 'keydown':
          status = NOTE_ON;
          break;
        case 'keyup':
          status = NOTE_OFF;
          break;
      }

      this.ea.publish( ONMIDIMESSAGE, this.midi.toMessage(
        status,
        keyMap[e.key]
      ));
    }
  }
}
