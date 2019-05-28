import { SET_ENVELOPE } from '../constants/index';
import initialState from '../../_data/initialState';

const { envelope: INITIAL_STATE } = initialState;

const envelope = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ENVELOPE:
      return {
        ...state,
        ...action.value,
      };

    default:
      return state;
  }
};

export default envelope;
