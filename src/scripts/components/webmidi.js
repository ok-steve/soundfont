import { h } from 'snabbdom/h';

import { midimessage } from '../actions/midimessage';
import { setMidiInputMap, setMidiInput } from '../actions/webmidi';
import { store } from '../store';
import { synth } from '../synth';

const toOption = map => (
  Array.from(map.values()).map(({ name, id }) => ({
    textContent: name,
    value: id,
  }))
);

const onChange = e => store.dispatch(setMidiInput(e.target.value));

navigator.requestMIDIAccess().then(access => {
  access.onstatechange = e => {
    store.dispatch(setMidiInputMap(e.target.inputs));
  };

  store.dispatch(setMidiInputMap(access.inputs));
});

store.subscribe(() => {
  const state = store.getState();

  if (state.webmidi.current && state.webmidi.current !== '') {
    state.webmidi.current.onmidimessage = e => {
      synth(midimessage(...e.data));
    };
  }
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
