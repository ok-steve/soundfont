import { SET_ENVELOPE } from '../constants/index';

const INITIAL_STATE = {
  attack: 0.1,
  decay: 0.2,
  sustain: 0.8,
  release: 0.8,
};

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
