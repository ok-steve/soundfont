import Worker from './soundfont.worker';

const worker = new Worker();

function soundfontToAudioBuffer({ context, buffers }) {
  const cache = [];

  buffers.forEach((value, key) => {
    cache.push(
      context.decodeAudioData(value).then((buffer) => {
        return [key, buffer];
      }),
    );
  });

  return Promise.all(cache).then((audioBuffers) => new Map(audioBuffers));
}

function requestFromWorker(message) {
  worker.postMessage(message);

  return new Promise((resolve, reject) => {
    function handler(e) {
      resolve(e.data);
      worker.removeEventListener('message', handler);
      // eslint-disable-next-line no-use-before-define
      worker.removeEventListener('error', errorHandler);
    }

    function errorHandler(e) {
      reject(e.message);
      worker.removeEventListener('message', handler);
      worker.removeEventListener('error', errorHandler);
    }

    worker.addEventListener('message', handler);
    worker.addEventListener('error', errorHandler);
  });
}

export default function(context, instrument = 'acoustic_grand_piano', soundfont = 'FluidR3_GM') {
  return requestFromWorker({ instrument, soundfont }).then((buffers) => {
    return soundfontToAudioBuffer({ context, buffers });
  });
}
