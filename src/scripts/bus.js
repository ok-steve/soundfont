import { merge } from './lib/Observable';

import keyboard from './components/keyboard';
import { onmidimessage } from './components/midi';
import pianoRoll from './components/pianoRoll';

const bus = merge(keyboard, pianoRoll, onmidimessage);

export default bus;
