import { IAction } from '../actions/index';

import { SET_ENVELOPE } from '../constants/index';

const INITIAL_STATE = {
  attack: 0.1,
  decay: 0.2,
  sustain: 0.8,
  release: 0.8,
};

export const envelope = (state: any = INITIAL_STATE, action: IAction): any => {
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
