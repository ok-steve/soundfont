import Observable from './lib/Observable';
import createSoundfont from './lib/createSoundfont';
import BufferSynth from './lib/BufferSynth';
import PolySynth from './lib/PolySynth';
import store from './store';
import bus from './bus';

const context = new AudioContext();

const instrumentObservable = new Observable(observer => {
  let currentSoundfont = '';

  store.subscribe(() => {
    const { soundfont } = store.getState();

    if (soundfont.instrument !== currentSoundfont) {
      observer.next(soundfont);
      currentSoundfont = soundfont.instrument;
    }
  });
});

const synth = new PolySynth(context, BufferSynth).connect(context.destination);

instrumentObservable.flatMap(({ soundfont, instrument }) => {
  return createSoundfont(context, instrument, soundfont);
}).subscribe(soundfont => {
  bus.subscribe(({ status, data }) => {
    const [note, velocity] = data;
    const { envelope } = store.getState();

    switch (status) {
      case 144:
        synth.start(note, velocity, soundfont[note], { envelope })
        break;

      case 128:
        synth.stop(note);
        break;
    }
  });
});
