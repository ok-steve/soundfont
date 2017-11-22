class PolySynth {
  constructor(context, synth) {
    this.context = context;
    this.Synth = synth;
    this.cache = new Map();
  }

  start(note, velocity, buffer, ...args) {
    if (!this.cache.has(note)) {
      const source = new this.Synth(this.context, ...args).connect(this.output);

      this.cache.set(note, source);
      source.start(buffer, velocity / 127);
    }

    return this;
  }

  stop(note) {
    if (this.cache.has(note)) {
      const source = this.cache.get(note);

      source.stop();

      this.cache.delete(note);
    }

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
