import { h } from 'snabbdom/h';

import { Observable } from '../lib/observable';
import { toMessage } from '../lib/util';
import { requestMIDIAccess } from '../lib/webmidi';
import { setMidiInputMap, setMidiInput } from '../actions/webmidi';
import { store } from '../store';

const toOption = map => (
  Array.from(map.values()).map(({ name, id }) => ({
    textContent: name,
    value: id,
  }))
);

const onChange = e => store.dispatch(setMidiInput(e.target.value));

requestMIDIAccess().map(access => access.inputs).subscribe((inputs) => {
  store.dispatch(setMidiInputMap(inputs));
});

export const onmidimessage = new Observable(observer => {
  store.subscribe(() => {
    const state = store.getState();

    if (state.webmidi.current && state.webmidi.current !== '') {
      state.webmidi.current.onmidimessage = e => {
        observer.next(toMessage(...e.data));
      };
    }
  });
});

export const webmidi = ({ current, map }) => {
  if (!map || map.size < 1) {
    return;
  }

  return h('div', [
    h('label', {
      attrs: {
        for: 'webmidi',
      },
    }, 'MIDI Input'),

    h('select', {
      attrs: {
        id: 'webmidi',
        value: current,
      },
      on: {
        change: onChange,
      },
    }, [
      h('option', {
        value: '',
      }, 'Select an option'),
      ...toOption(map).map(({ textContent, value }) => (
        h('option', {
          attrs: {
            value,
            selected: value === current,
          },
        }, textContent)
      )),
    ]),
  ]);
};
