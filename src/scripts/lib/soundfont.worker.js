import memoizeWithStorage from './storage';
import httpFetch from './httpFetch';
import { decodeBase64, noteToMIDI } from './Util';

function toMap(obj) {
  return new Map(Object.entries(obj));
}

function nameToUrl({
  soundfont = 'FluidR3_GM',
  instrument = 'acoustic_grand_piano',
  format = 'mp3',
}) {
  const baseURL = 'https://gleitz.github.io';
  return `${baseURL}/midi-js-soundfonts/${soundfont}/${instrument}-${format}.js`;
}

function midiJsToJson(data) {
  let begin = data.indexOf('MIDI.Soundfont.');
  // if (begin < 0) throw Error('Invalid MIDI.js Soundfont format')
  begin = data.indexOf('=', begin) + 2;
  const end = data.lastIndexOf(',');

  return JSON.parse(`${data.slice(begin, end)}}`);
}

function fetchSoundfont(options) {
  return (
    httpFetch(nameToUrl(options))
      // .then((result) => result.text())
      .then((text) => midiJsToJson(text))
  );
}

function soundfontToArrayBuffer(soundfont) {
  const buffers = new Map();

  soundfont.forEach((value, key) => {
    const base64 = value.split(',')[1];
    buffers.set(noteToMIDI(key), decodeBase64(base64));
  });

  return buffers;
}

const memoizedSoundfont = memoizeWithStorage(({ key: instrument, storeName: soundfont }) =>
  fetchSoundfont({ instrument, soundfont }).then((data) => soundfontToArrayBuffer(toMap(data))),
);

// eslint-disable-next-line func-names
onmessage = function(e) {
  const { instrument, soundfont } = e.data;

  memoizedSoundfont({ storeName: soundfont, key: instrument }).then((buffers) => {
    postMessage(buffers);
  });
};
