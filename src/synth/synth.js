import { inject } from 'aurelia-framework';

import { SynthService } from '../resources/services/synth-service';

@inject( SynthService )
export class Synth {
  constructor( SynthService ) {
    this.synth = SynthService;
  }
}
