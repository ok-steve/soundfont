import fromPromise from './Observable/fromPromise.js';

const decodeAudioData = (context, buffer) =>
  fromPromise(context.decodeAudioData(buffer));

export default decodeAudioData;
