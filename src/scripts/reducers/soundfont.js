import { SET_SOUNDFONT } from '../constants/index';

const INITIAL_STATE = 'acoustic_grand_piano';

export const soundfont = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOUNDFONT:
      return action.value;

    default:
      return state;
  }
};
