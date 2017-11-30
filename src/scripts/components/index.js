import { h } from 'snabbdom/h';

import midi from './midi';

import './envelope';
import './keyboard';
import './octave';
import './pianoRoll';
import './soundfont';

const appShell = state => h('div#app.mt2.bg-white.pa3.ba.b--moon-gray.br2', [
  midi(state.midi),
]);

export default appShell;
