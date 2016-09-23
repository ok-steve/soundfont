import { bindable } from 'aurelia-framework';

import { range } from '../../lib/underscore';
import { mtof } from '../../lib/midi';

export class PianoRollCustomElement {
  @bindable noteon;
  @bindable noteoff;

  constructor() {
    // 21-108 is range of standard keyboard in MIDI numbers
    this.keys = range( 21, 109 );
  }

  onMousedown( value ) {
    this.noteon(mtof( value ));
  }

  onMouseup( value ) {
    this.noteoff(mtof( value ));
  }
}
