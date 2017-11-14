import Observable from 'zen-observable';
import httpFetch from './httpFetch';
import { decodeBase64, noteToMIDI } from './Util';
import decodeAudioData from './decodeAudioData';

if (typeof window.MIDI === 'undefined') {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

const nameToUrl = (name, sf = 'FluidR3_GM', format = 'ogg') => {
  const baseURL = 'https://gleitz.github.io';

  return `${baseURL}/midi-js-soundfonts/${sf}/${name}-${format}.js`;
};

const createScript = (text) => {
  const el = document.createElement('script');

  el.type = 'text/javascript';
  el.text = text;

  document.body.appendChild(el);
};

const fetchSoundfont = (name) => {
  if (window.MIDI.Soundfont[name]) {
    return Observable.of(window.MIDI.Soundfont[name]);
  }

  return httpFetch(nameToUrl(name))
    .flatMap((text) => {
      createScript(text);

      return fetchSoundfont(name);
    });
};

/* eslint-disable max-len */
const createSoundfont = (context, name) => fetchSoundfont(name).flatMap(sf => Observable.from(Object.keys(sf)).flatMap((key) => {
/* eslint-enable */
  const base64 = sf[key].split(',')[1];

  return Observable.of(base64).map(decodeBase64)
    .flatMap(buffer => decodeAudioData(context, buffer))
    .map(buffer => [noteToMIDI(key), buffer]);
}).reduce((prev, [key, buffer]) => ({
  ...prev,
  [key]: buffer,
}), {}));

export default createSoundfont;
