import { merge } from './lib/observable';

import { keyboardMessages } from './components/keyboard';
import { pianoMessages } from './components/piano-roll';
import { onmidimessage } from './components/webmidi';

export const midimessage = merge(keyboardMessages, pianoMessages, onmidimessage);
