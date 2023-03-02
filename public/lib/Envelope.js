class Envelope {
  constructor(context, { attack = 0.01, decay = 0.1, sustain = 0.5, release = 1 }) {
    this.context = context;
    this.param = null;
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
  }

  triggerAttack(time = this.context.currentTime, velocity = 1) {
    if (this.param !== null) {
      this.param.setValueAtTime(0, time);
      this.param.linearRampToValueAtTime(velocity, time + this.attack);
      this.param.linearRampToValueAtTime(velocity * this.sustain, time + this.attack + this.decay);
    }

    return this;
  }

  triggerRelease(time = this.context.currentTime) {
    if (this.param !== null) {
      this.param.linearRampToValueAtTime(0, time + this.release);
    }

    return this;
  }

  triggerAttackRelease(duration, time = this.context.currentTime, velocity = 1) {
    this.triggerAttack(time, velocity);
    this.triggerRelease(time + duration);

    return this;
  }

  connect(to) {
    this.param = to;

    return this;
  }

  disconnect() {
    this.param = null;

    return this;
  }
}

export default Envelope;
