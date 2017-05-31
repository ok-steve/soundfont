import { Instrument } from 'tone';

import { SoundfontPlayer } from './soundfont-player';

const defaults = {
  volume: 1,
  player: {
    type: 'acoustic_grand_piano'
  }
};

export class SoundfontSampler extends Instrument {
  defaults = defaults;

  constructor(options) {
    options = Object.assign(defaults, options);

    super(options);

    this.player = new SoundfontPlayer(options.player.type);

    this.player.chain( this.output );
  }

  triggerAttack(bufferName, time, velocity) {
    time = this.toSeconds(time);

    this.player.start(bufferName, time);

    return this;
  }

  triggerRelease(bufferName, time) {
    time = this.toSeconds(time);

    this.player.stop( bufferName, time );

    return this;
  }
}
