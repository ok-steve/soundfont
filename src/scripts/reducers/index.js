import { combineReducers } from 'redux';

import envelope from './envelope';
import midi from './midi';
import octave from './octave';
import soundfont from './soundfont';

const rootReducer = combineReducers({
  envelope,
  midi,
  octave,
  soundfont,
});

export default rootReducer;
