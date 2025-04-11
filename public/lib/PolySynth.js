class PolySynth {
  constructor(context, voice) {
    this.context = context;
    this.Voice = voice;
    this.cache = new Map();
  }

  triggerAttack(
    notes,
    time = this.context.currentTime,
    velocity,
    buffer,
    ...args
  ) {
    const freqs = Array.isArray(notes) ? notes : [notes];

    freqs.forEach((note) => {
      if (!this.cache.has(note)) {
        const voice = new this.Voice(this.context, ...args).connect(
          this.output
        );

        this.cache.set(note, voice);
      }

      const voice = this.cache.get(note);

      voice.triggerAttack(buffer, time, velocity / 127);
    });

    return this;
  }

  triggerRelease(notes, time = this.context.currentTime) {
    const freqs = Array.isArray(notes) ? notes : [notes];

    freqs.forEach((note) => {
      if (this.cache.has(note)) {
        const voice = this.cache.get(note);

        voice.triggerRelease(time);
      }
    });

    return this;
  }

  triggerAttackRelease(
    notes,
    duration,
    time = this.context.currenTime,
    velocity = 1
  ) {
    this.triggerAttack(notes, time, velocity);
    this.triggerRelease(notes, time + duration);
    return this;
  }

  connect(to) {
    this.output = to;

    return this;
  }

  disconnect() {
    this.output = null;

    return this;
  }
}

export default PolySynth;
