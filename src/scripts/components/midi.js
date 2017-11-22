import requestMIDIAccess from '../lib/requestMIDIAccess';
import setDevices from '../actions/setDevices';
import setActiveDevice from '../actions/setActiveDevice';
import store from '../store';

import select from './select';

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

  return select('MIDI Input', {
    attrs: {
      id: 'webmidi',
      value: current,
    },
    on: {
      change: onChange,
    },
  }, toOption(map));
};

export default midi;
