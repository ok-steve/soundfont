import Observable from 'zen-observable';
import fromEvent from '../lib/Observable/fromEvent';
import requestMIDIAccess from '../lib/requestMIDIAccess';
import { toMessage } from '../lib/Util';

const inputDevices = requestMIDIAccess().map(access => access.inputs);

export const onmidimessage = inputDevices
  .flatMap(inputs => Observable.from(Array.from(inputs.values())))
  .flatMap(input => fromEvent(input, 'midimessage'))
  .map(e => toMessage(...e.data));
