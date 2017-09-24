import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { pitchToMidi } from '../../lib/conversion';
import { contains } from '../../lib/fp';
import { MIDIStatus } from '../../lib/general-midi';

import { keydown, keyup } from '../../lib/events';

import { midimessage } from '../actions/midimessage';

import { publish, store } from '../store';

const octave = store.map((state) => state.octave);
const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

const getNote = (oct, e) => {
  return pitchToMidi((e.shiftKey ? oct + 1 : oct), keys.indexOf(e.key.toLowerCase()));
};

const keypress = Observable.merge(
  keydown(document),
  keyup(document),
).filter((e) => {
  return contains(e.key.toLowerCase(), keys);
});

keypress.withLatestFrom(octave).subscribe(([e, oct]) => {
  const note = getNote(oct, e);

  switch (e.type) {
    case 'keydown':
      publish(midimessage(MIDIStatus.NoteOn, note));
      break;
    case 'keyup':
      publish(midimessage(MIDIStatus.NoteOff, note));
      break;
  }
});
