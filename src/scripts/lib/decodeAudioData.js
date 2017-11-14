import fromPromise from './fromPromise';

const decodeAudioData = (context, buffer) => fromPromise(context.decodeAudioData(buffer));

export default decodeAudioData;
