import Observable, { merge } from './lib/Observable';
import { toMessage } from './lib/Util';

import keyboard from './components/keyboard';
import pianoRoll from './components/pianoRoll';

import store from './store';

const onmidimessage = new Observable(observer => {
  store.subscribe(() => {
    const { midi } = store.getState();

    if (midi.current && midi.current !== '') {
      const activeDevice = midi.map.get(midi.current);

      activeDevice.onmidimessage = e => {
        observer.next(toMessage(...e.data));
      };
    }
  });
});

const bus = merge(keyboard, pianoRoll, onmidimessage);

export default bus;
