import 'rxjs/add/operator/map';

import { velocityToGain } from '../../lib/conversion';
import { soundfont } from '../../lib/soundfont';

import { ADSREnvelope } from './adsr-envelope';

export class Soundfont {
  static of(...args): Soundfont {
    return new Soundfont(...args);
  }

  constructor(context: AudioContext) {
    this.context = context;

    this.gain = this.context.createGain();
    this.gain.gain.value = 0;
    this.gain.connect(this.context.destination);

    this.env = ADSREnvelope.of(this.context);
    this.env.connect(this.gain.gain);

    this.set('type', 'acoustic_grand_piano');
  }

  start(midi: string, velocity: number = 127): void {
    if (!this.bufferSource) {
      this.buffers.map((buf: Map<[number, AudioBuffer]>): AudioBuffer => {
        return buf.get(midi);
      }).subscribe((buffer: AudioBuffer): void => {
        const now = this.context.currentTime;

        this.bufferSource = this.context.createBufferSource();

        this.bufferSource.onended = e => {
          this.bufferSource.disconnect();
          this.bufferSource = null;
        };

        this.bufferSource.connect(this.gain);
        this.bufferSource.buffer = buffer;
        this.bufferSource.start();

        this.env.start(velocityToGain(velocity));
      });
    }
  }

  stop(): void {
    if (this.bufferSource) {
      const now = this.context.currentTime;

      this.env.stop();
      this.bufferSource.stop(now + this.env.release);
    }
  }

  set(key: string, value: string | number) {
    if (this[key] !== value) {
      this[key] = value;

      if (key === 'type') {
        this.buffers = soundfont(this.context, this.type);
      } else if (key === 'envelope') {
        this.env.envelope = value;
      }
    }
  }
}
