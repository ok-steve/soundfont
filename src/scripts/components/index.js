import { h } from 'snabbdom/h';

import { webmidi } from './webmidi';

import './envelope',
import './keyboard';
import './octave';
import './piano-roll';
import './soundfont';

export const appShell = (state) => {
  return h('div', [
    webmidi(state.webmidi),
  ]);
};
