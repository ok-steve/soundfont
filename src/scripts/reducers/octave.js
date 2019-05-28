import { clamp } from '../lib/Util';
import { SET_OCTAVE } from '../constants/index';
import initialState from '../../_data/initialState';

const { octave: INITIAL_STATE } = initialState;

const octave = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_OCTAVE:
      return clamp(parseInt(action.value, 10), 2, 7);

    default:
      return state;
  }
};

export default octave;
