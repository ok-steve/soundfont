import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { midiConnectionEvent } from './connection-event';
import { requestMidiAccess } from './request-access';

const request = requestMidiAccess();

export const midiAccess = Observable.merge(
  request,
  request.mergeMap(midiConnectionEvent).map((e: WebMidi.MIDIConnectionEvent): WebMidi.MIDIAccess => {
    return <WebMidi.MIDIAccess> e.target;
  })
);
