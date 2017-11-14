import Observable from 'zen-observable';

import merge from './lib/merge';
import { toMessage } from './lib/Util';

import keyboard from './components/keyboard';
import pianoRoll from './components/pianoRoll';

import store from './store';

const onmidimessage = new Observable(observer => {
  store.subscribe(() => {
    const state = store.getState();

    if (state.webmidi.current && state.webmidi.current !== '') {
      state.webmidi.current.onmidimessage = e => {
        observer.next(toMessage(...e.data));
      };
    }
  });
});

const bus = merge(keyboard, pianoRoll, onmidimessage);

export default bus;
