import Observable from 'zen-observable';
import createSoundfont from './lib/createSoundfont';
import BufferSynth from './lib/BufferSynth';
import store from './store';
import bus from './bus';

const context = new AudioContext();

const instrument = new Observable(observer => {
  let currentSoundfont = '';

  store.subscribe(() => {
    const { soundfont } = store.getState();

    if (soundfont !== currentSoundfont) {
      observer.next(soundfont);
      currentSoundfont = soundfont;
    }
  });
});

const cache = new Map();

instrument.flatMap(sf => createSoundfont(context, sf)).subscribe(soundfont => {
  bus.subscribe(({ status, data }) => {
    const [note, velocity] = data;
    const { envelope } = store.getState();

    switch (status) {
      case 144:
        if (!cache.has(note)) {
          const source = new BufferSynth(context, { envelope });

          cache.set(note, source);

          source.start(soundfont[note], velocity / 127);
        }
        break;

      case 128:
        if (cache.has(note)) {
          const source = cache.get(note);

          source.stop();

          cache.delete(note);
        }
        break;
    }
  });
});
