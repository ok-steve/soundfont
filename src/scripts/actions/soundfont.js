import { SET_SOUNDFONT } from '../constants/index';

export const setSoundfont = value => {
  return {
    value,
    type: SET_SOUNDFONT,
  };
};
