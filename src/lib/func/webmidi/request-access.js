import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

const request = () => {
  if (navigator.requestMIDIAccess === undefined) {
    return Promise.reject(new Error('MIDI is not supported on this device'));
  }

  return navigator.requestMIDIAccess();
};

export const requestMidiAccess = () => {
  const access = request();

  return Observable.fromPromise(access);
};
