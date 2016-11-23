import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { NOTE_ON, NOTE_OFF, MidiService } from '../resources/services/midi-service';
import { OnmidimessageEvent } from '../resources/events/onmidimessage';

@inject( EventAggregator, MidiService )
export class Piano {
  constructor( EventAggregator, MidiService ) {
    this.ea = EventAggregator;
    this.midi = MidiService;
  }

  sendMessage( status, note ) {
    this.ea.publish( new OnmidimessageEvent( this.midi.toMessage(
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
