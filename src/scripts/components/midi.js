import { fromEvent } from '../lib/Observable';
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

const onChange = e => dispatch(setActiveDevice(e.target.value));

const midiStore = store.map(({ midi }) => midi);

const inputDevices = requestMIDIAccess().map(access => access.inputs);

inputDevices.withLatestFrom(midiStore).subscribe(([inputs, state]) => {
  const { current } = state;
  dispatch(setDevices(inputs));

  if (current && current !== '' && !inputs.has(current)) {
    dispatch(setActiveDevice(''));
  }
});

export const onmidimessage = midiStore
  .filter(({ current, map }) => current && current !== '' && map.has(current))
  .map(({ current, map }) => map.get(current))
  .flatMap(device => fromEvent(device, 'midimessage'))
  .map(e => toMessage(...e.data));

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
