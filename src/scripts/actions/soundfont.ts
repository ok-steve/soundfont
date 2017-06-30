import { SET_SOUNDFONT } from '../constants/index';

import { IAction } from './index';

export const setSoundfont = (value: string): IAction => {
  return {
    value,
    type: SET_SOUNDFONT,
  };
};
