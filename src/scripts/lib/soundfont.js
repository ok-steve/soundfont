import { Observable, fromPromise } from './observable';
import { httpFetch } from './ajax';
import { decodeBase64, noteToMIDI } from './util';
import { decodeAudioData } from './webaudio';

if (typeof window.MIDI === 'undefined') {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

const nameToUrl = (name, sf = 'FluidR3_GM', format = 'ogg') => {
  const baseURL = 'https://gleitz.github.io';

  return `${baseURL}/midi-js-soundfonts/${sf}/${name}-${format}.js`;
};

const createScript = text => {
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

export const createSoundfont = (context, name) => {
  return fetchSoundfont(name).flatMap(sf => {
    return Observable.from(Object.keys(sf)).flatMap(key => {
      const base64 = sf[key].split(',')[1];

      return Observable.of(base64).map(decodeBase64)
        .flatMap(buffer => decodeAudioData(context, buffer))
        .map(buffer => [noteToMIDI(key), buffer]);
    }).reduce((prev, [key, buffer]) => {
      prev[key] = buffer;

      return prev;
    }, {});
  });
};
