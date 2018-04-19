import { combineReducers } from 'redux';

import envelope from './envelope';
import octave from './octave';
import soundfont from './soundfont';

const rootReducer = combineReducers({
  envelope,
  octave,
  soundfont,
});

export default rootReducer;
