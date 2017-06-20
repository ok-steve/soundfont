import {
  SET_ENVELOPE,
} from '../constants/index';

import { IAction } from './index';

export const setEnvelope = (key: string, value: number): IAction => {
  return {
    value: {
      [key]: value,
    },
    type: SET_ENVELOPE,
  };
};
