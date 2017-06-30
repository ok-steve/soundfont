import { IMIDIMessage } from '../../lib/general-midi';

export const midimessage = (status: number, data0: number: data1: number = 127): IMIDIMessage => {
  return {
    status,
    data: [data0, data1],
  };
};
