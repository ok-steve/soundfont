import { fromPromise } from './observable';

export const decodeAudioData = (context, buffer) => {
  return fromPromise(context.decodeAudioData(buffer));
};
