import Envelope from './Envelope.js';

class BufferSynth {
  constructor(context, { envelope }) {
    this.context = context;
    this.gain = this.context.createGain();
    this.envelope = new Envelope(this.context, envelope);
    this.envelope.connect(this.gain.gain);
  }

  triggerAttack(buffer, time = this.context.currentTime, velocity = 1) {
    if (!this.source) {
      this.source = this.context.createBufferSource();
      this.source.connect(this.gain);
      this.source.buffer = buffer;

      this.envelope.triggerAttack(time, velocity);
      this.source.start(time);
    }

    return this;
  }

  triggerRelease(time = this.context.currentTime) {
    if (this.source) {
      this.source.onended = () => {
        this.source.disconnect();
        this.source = null;
      };

      this.envelope.triggerRelease(time);
      this.source.stop(time + this.envelope.release);
    }

    return this;
  }

  connect(to) {
    this.gain.connect(to);

    return this;
  }

  disconnect(from) {
    this.gain.disconnect(from);

    return this;
  }
}

export default BufferSynth;
