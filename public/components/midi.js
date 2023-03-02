import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';
import fromEvent from '../lib/Observable/fromEvent.js';
import requestMIDIAccess from '../lib/requestMIDIAccess.js';
import toMessage from '../lib/toMessage.js';

const inputDevices = requestMIDIAccess().map((access) => access.inputs);

const midi = inputDevices
  .flatMap((inputs) => Observable.from(Array.from(inputs.values())))
  .flatMap((input) => fromEvent(input, 'midimessage'))
  .map((e) => toMessage(...e.data));

export default midi;
