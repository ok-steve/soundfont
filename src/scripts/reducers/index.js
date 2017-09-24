import { combineReducers } from 'redux';

import { envelope } from './envelope';
import { octave } from './octave';
import { soundfont } from './soundfont';
import { webmidi } from './webmidi';

export const rootReducer = combineReducers({
  envelope,
  octave,
  soundfont,
  webmidi,
});
