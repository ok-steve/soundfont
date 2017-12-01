import { h } from 'snabbdom/h';

import midi from './midi';

import './envelope';
import './keyboard';
import './octave';
import './pianoRoll';
import './soundfont';

const appShell = state => h('div#app', [
  midi(state.midi),
]);

export default appShell;
