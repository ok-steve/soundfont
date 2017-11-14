import { h } from 'snabbdom/h';

import requestMIDIAccess from '../lib/requestMIDIAccess';
import setDevices from '../actions/setDevices';
import setActiveDevice from '../actions/setActiveDevice';
import store from '../store';

const toOption = map => (
  Array.from(map.values()).map(({ name, id }) => ({
    textContent: name,
    value: id,
  }))
);

const onChange = e => store.dispatch(setActiveDevice(e.target.value));

requestMIDIAccess().map(access => access.inputs).subscribe((inputs) => {
  store.dispatch(setDevices(inputs));
});

const midi = ({ current, map }) => {
  if (!map || map.size < 1) return undefined;

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

export default midi;
