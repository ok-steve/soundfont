import fromPromise from './Observable/fromPromise';

const decodeAudioData = (context, buffer) => fromPromise(context.decodeAudioData(buffer));

export default decodeAudioData;
