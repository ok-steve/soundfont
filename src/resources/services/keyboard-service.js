import { has } from '../../lib/underscore';
import { mtof } from '../../lib/midi';

const keyMap = {
  'a': 60,
  'w': 61,
  's': 62,
  'e': 63,
  'd': 64,
  'f': 65,
  't': 66,
  'g': 67,
  'y': 68,
  'h': 69,
  'u': 70,
  'j': 71,
  'k': 72
};

export class KeyboardService {
  onKeypress( e, callback ) {
    if ( has( keyMap, e.key ) && !e.repeat ) {
      const freq = mtof( keyMap[e.key] );

      callback( freq );
    }
  }
}
