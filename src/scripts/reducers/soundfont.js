import { SET_SOUNDFONT, SET_SOUNDFONT_INSTRUMENT } from '../constants/index';
import { initialState } from '../../data.json';

const { soundfont: INITIAL_STATE } = initialState;

const soundfont = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOUNDFONT:
      return {
        ...state,
        soundfont: action.value,
      };

    case SET_SOUNDFONT_INSTRUMENT:
      return {
        ...state,
        instrument: action.value,
      };

    default:
      return state;
  }
};

export default soundfont;
