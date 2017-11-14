import { SET_ENVELOPE } from '../constants/index';
import { state } from '../../data.json';

const { envelope: INITIAL_STATE } = state;

export const envelope = (state = INITIAL_STATE, action) => {
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
