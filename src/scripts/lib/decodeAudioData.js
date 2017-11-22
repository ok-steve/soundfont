import { fromPromise } from './Observable';

const decodeAudioData = (context, buffer) => fromPromise(context.decodeAudioData(buffer));

export default decodeAudioData;
