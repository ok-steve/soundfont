export class PolySynth {
  cache = new Set();
  numVoices = 10;
  params = new Map();
  voices = new Map();

  static of(...args) {
    return new PolySynth(...args);
  }

  constructor(context, Synthdef) {
    this.context = context;
    this.Synthdef = Synthdef;
  }

  start(midi, velocity = 127) {
    let voice;

    if (this.cache.size > 0) {
      voice = this.cache.values().next().value;
      this.cache.delete(voice);
    } else {
      voice = this.Synthdef.of(this.context);
    }

    this.params.forEach((value, key) => {
      voice.set(key, value);
    });

    voice.start(midi, velocity);

    this.voices.set(midi, voice);
  };

  stop(midi) {
    const voice = this.voices.get(midi);

    if (voice) {
      voice.stop();

      if (this.cache.size < this.numVoices) {
        this.cache.add(voice);
      }

      this.voices.delete(midi);
    }
  };

  set(key, value) {
    this.params.set(key, value);

    this.voices.forEach((voice) => {
      voice.set[key] = value;
    });
  }
}
