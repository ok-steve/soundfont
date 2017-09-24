import { SET_OCTAVE } from '../constants/index';

export const setOctave = value => {
  return {
    value,
    type: SET_OCTAVE,
  };
};
