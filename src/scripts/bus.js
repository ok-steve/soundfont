import { merge } from 'zen-observable/extras';

import keyboard from './components/keyboard';
import midi from './components/midi';
import pianoRoll from './components/pianoRoll';

const bus = merge(keyboard, pianoRoll, midi);

export default bus;
