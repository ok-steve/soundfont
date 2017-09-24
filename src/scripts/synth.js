import Soundfont from 'soundfont-player';
import { store } from './store';

const context = new AudioContext();

const getSoundfont = () => {
  const state = store.getState();

  return Soundfont.instrument(context, state.soundfont, {
    ...state.envelope,
  });
};

let sf = getSoundfont();

store.subscribe(() => {
  sf = getSoundfont();
});

const cache = new Map();

export const synth = ({ status, data }) => {
  const [note, velocity] = data;

  switch (status) {
    case 144:
      if (!cache.has(note)) {
        sf.then(instrument => {
          cache.set(note, instrument.play(note));
        });
      }
      break;

    case 128:
      if (cache.has(note)) {
        cache.get(note).stop(context.currentTime);
        cache.delete(note);
      }
      break;
  }
};
