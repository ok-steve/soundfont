import { h } from 'snabbdom/h';

import Observable from 'zen-observable';
import requestMIDIAccess from '../lib/requestMIDIAccess';
import { toMessage } from '../lib/Util';

import setDevices from '../actions/setDevices';
import setActiveDevice from '../actions/setActiveDevice';
import store, { dispatch } from '../store';

import select from './select';

const toOption = map => (
  Array.from(map.values()).map(({ name, id }) => ({
    textContent: name,
    value: id,
  }))
);

const onChange = ({ target }) => {
  const value = target.value === 'Select an option' ? '' : target.value;

  dispatch(setActiveDevice(value));
};

const midiStore = store.map(({ midi }) => midi);

const inputDevices = requestMIDIAccess().map(access => access.inputs);

inputDevices.subscribe((inputs) => {
  dispatch(setDevices(inputs));
});

midiStore.subscribe(({ current, map }) => {
  if (current && current !== '' && !map.has(current)) {
    dispatch(setActiveDevice(''));
  }
});

export const onmidimessage = midiStore
  .flatMap(({ current, map }) => new Observable((observer) => {
    if (map) {
      map.forEach((value, key) => {
        const device = value;

        if (key === current) {
          device.onmidimessage = (e) => {
            observer.next(e);
          };
        } else {
          device.onmidimessage = null;
        }
      });
    }
  }))
  .map(e => toMessage(...e.data));

const midi = ({ current, map }) => {
  if (!map || map.size < 1) return undefined;

  return h('div.mt2.bg-white.pa3.ba.b--moon-gray.br2', [
    select('MIDI Input', {
      attrs: {
        id: 'webmidi',
        value: current,
      },
      on: {
        change: onChange,
      },
    }, toOption(map)),
  ]);
};

export default midi;
