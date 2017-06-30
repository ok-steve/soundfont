import { IAction } from '../actions/index';

import { SET_SOUNDFONT } from '../constants/index';

const INITIAL_STATE = 'acoustic_grand_piano';

export const soundfont = (state: string = INITIAL_STATE, action: IAction): string => {
  switch (action.type) {
    case SET_SOUNDFONT:
      return action.value;

    default:
      return state;
  }
};
