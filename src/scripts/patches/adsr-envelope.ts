export class ADSREnvelope {
  attack: number = 0.1;
  decay: number = 0.2;
  sustain: number = 0.8;
  release: number = 0.8;

  static of(...args): ADSREnvelope {
    return new ADSREnvelope(...args);
  }

  constructor(context: AudioContext) {
    this.context = context;
  }

  start(value) {
    const now = this.context.currentTime;

    this.param.cancelScheduledValues(now);
    this.param.setValueAtTime(0, now);
    this.param.linearRampToValueAtTime(1 * value, now + this.envelope.attack);
    this.param.linearRampToValueAtTime(this.envelope.sustain, now + this.envelope.attack + this.envelope.decay);
  }

  stop() {
    const now = this.context.currentTime;

    this.param.linearRampToValueAtTime(0, now + this.envelope.release);
  }

  get envelope() {
    return {
      attack: this.attack,
      decay: this.decay,
      sustain: this.sustain,
      release: this.release,
    };
  }

  set envelope(value) {
    this.attack = value.attack;
    this.decay = value.decay;
    this.sustain = value.sustain;
    this.release = value.release;
  }

  connect(param: AudiParam) {
    this.param = param;
  }
}
