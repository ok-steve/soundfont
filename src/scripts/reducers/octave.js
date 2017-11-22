import { SET_OCTAVE } from '../constants/index';
import { initialState } from '../../data.json';

const { octave: INITIAL_STATE } = initialState;

const octave = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_OCTAVE:
      const value = parseInt(action.value, 10);

      if (value < 2 || value > 7) return state;

      return value;

    default:
      return state;
  }
};

export default octave;
