import { SET_OCTAVE } from '../constants/index';

const INITIAL_STATE = 4;

export const octave = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_OCTAVE:
      return parseInt(action.value, 10);

    default:
      return state;
  }
};
