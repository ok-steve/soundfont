import keyboardJS from 'keyboardjs';
import { each, keys } from './utilities/underscore';
import { mtof } from './utilities/midi';

export function bind( keydown, keyup ) {
  const keyMap = {
    'a': 60, // a:C
    'w': 61, // w:C#/Db
    's': 62, // s:D
    'e': 63, // e:D#/Eb
    'd': 64, // d:E
    'f': 65, // f:F
    't': 66, // t:F#/Gb
    'g': 67, // g:G
    'y': 68, // y:G#/Ab
    'h': 69, // h:A
    'u': 70, // u:A#/Bb
    'j': 71, // j:B
    'k': 72  // k:C
  };

  each( keys( keyMap ), key => {
    let freq = mtof( keyMap[key] );

    keyboardJS.bind( key, e => {
      e.preventRepeat();

      keydown( freq );
    }, e => {
      keyup( freq );
    });
  });
}

export function unbind() {
  keyboardJS.reset();
}
