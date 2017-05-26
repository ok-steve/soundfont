import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const keys = ['a','w','s','e','d','f','t','g','y','h','u','j','k'];

const keyToMidi = ( octave, key ) => {
  const pitch = keys.indexOf( key.toLowerCase() );

  return (pitch + (12 * octave));
};

export class ShortcutService {
  octave = 4;

  get midimessage() {
    return Observable.merge(
      this.noteon,
      this.noteoff
    );
  }

  get noteon() {
    return this.fromEvent('keydown').map(note => {
      return {
        status: 144,
        data: [note, 127]
      };
    });
  }

  get noteoff() {
    return this.fromEvent('keyup').map(note => {
      return {
        status: 128,
        data: [note, 127]
      };
    });
  }

  fromEvent(type) {
    return Observable.fromEvent(window, type)
      .filter(e => !e.repeat)
      .filter(e => keys.indexOf(e.key.toLowerCase()) !== -1)
      .map(e => {
        const octave = e.shiftKey ? this.octave + 1 : this.octave;

        return keyToMidi(octave, e.key);
      });
  }
}
