export class PolySynth {
  cache = new Set();
  numVoices: number = 10;
  params = new Map();
  voices = new Map();

  static of(...args): PolySynth {
    return new PolySynth(...args);
  }

  constructor(context: AudioContext, Synthdef) {
    this.context = context;
    this.Synthdef = Synthdef;
  }

  start(midi: number, velocity: number = 127) {
    let voice;

    if (this.cache.size > 0) {
      voice = this.cache.values().next().value;
      this.cache.delete(voice);
    } else {
      voice = this.Synthdef.of(this.context);
    }

    this.params.forEach((value, key): void => {
      voice.set(key, value);
    });

    voice.start(midi, velocity);

    this.voices.set(midi, voice);
  };

  stop(midi: number) {
    const voice = this.voices.get(midi);

    voice.stop();

    if (this.cache.size < this.numVoices) {
      this.cache.add(voice);
    }

    this.voices.delete(midi);
  };

  set(key: string, value: string | number): void {
    this.params.set(key, value);

    this.voices.forEach((voice): void => {
      voice.set[key] = value;
    });
  }
}
