import { inject } from 'aurelia-framework';

import { mtof } from '../lib/midi';

import { SynthService } from '../resources/services/synth-service';

@inject( SynthService )
export class Piano {
  constructor( SynthService ) {
    this.synth = SynthService;
  }

  onMousedown( e ) {
    this.synth.triggerAttack( mtof( e.target.getAttribute('data-midi') ) );
  }

  onMouseup( e ) {
    this.synth.triggerRelease( mtof( e.target.getAttribute('data-midi') ) );
  }
}
