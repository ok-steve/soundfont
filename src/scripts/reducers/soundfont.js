import { SET_SOUNDFONT } from '../constants/index';
import { state } from '../../data.json';

const { soundfont: INITIAL_STATE } = state;

export const soundfont = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOUNDFONT:
      return action.value;

    default:
      return state;
  }
};
