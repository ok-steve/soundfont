import { SET_SOUNDFONT } from '../constants/index';
import { initialState } from '../../data.json';

const { soundfont: INITIAL_STATE } = initialState;

const soundfont = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOUNDFONT:
      return action.value;

    default:
      return state;
  }
};

export default soundfont;
