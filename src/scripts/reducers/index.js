import { envelope } from './envelope';
import { octave } from './octave';
import { soundfont } from './soundfont';
import { webmidi } from './webmidi';

export const rootReducer = (state = {}, action = {}) => {
  return {
    envelope: envelope(state.envelope, action),
    octave: octave(state.octave, action),
    soundfont: soundfont(state.soundfont, action),
    webmidi: webmidi(state.webmidi, action),
  };
};
