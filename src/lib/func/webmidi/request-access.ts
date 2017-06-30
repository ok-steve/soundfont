import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

const request = (): Promise<WebMidi.MIDIAccess> => {
  if (navigator.requestMIDIAccess === undefined) {
    return Promise.reject(new Error('MIDI is not supported on this device'));
  }

  return navigator.requestMIDIAccess();
};

export const requestMidiAccess = (): Observable<WebMidi.MIDIAccess> => {
  const access = request();

  return Observable.fromPromise(access);
};
