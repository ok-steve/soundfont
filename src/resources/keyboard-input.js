import keyboardJS from 'keyboardjs';
import { keys } from '../lib/underscore';
import { mtof } from '../lib/midi';

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

export const bind = ( keydown, keyup ) => {
  keyboardJS.bind( keys( keyMap ), e => {
    e.preventRepeat();

    const freq = mtof( keyMap[e.key] );

    keydown( freq );
  }, e => {
    const freq = mtof( keyMap[e.key] );

    keyup( freq );
  });
};

export const unbind = () => {
  keyboardJS.reset();
};
