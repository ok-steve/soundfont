import { merge } from 'https://cdn.skypack.dev/zen-observable/esm.js';

import keyboard from './components/keyboard.js';
import midi from './components/midi.js';
import pianoRoll from './components/pianoRoll.js';

const bus = merge(keyboard, pianoRoll, midi);

export default bus;
