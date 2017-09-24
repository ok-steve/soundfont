import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

import { noteToMidi } from './conversion';
import { makeRequest } from './network';

if (typeof window.MIDI === 'undefined') {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

const decodeArrayBuffer = (base64) => {
  const raw = atob(base64);
  const len = raw.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = raw.charCodeAt(i);
  }

  return bytes.buffer;
};

const loadSoundfont = (name) => {
  if (window.MIDI.Soundfont[name]) {
    return Promise.resolve(window.MIDI.Soundfont[name]);
  }

  const baseUrl = 'https://gitcdn.xyz/repo';
  const repo = 'gleitz/midi-js-soundfonts/gh-pages';
  const format = 'ogg';
  const library = 'FluidR3_GM';

  return makeRequest(
    `${baseUrl}/${repo}/${library}/${name}-${format}.js`
 ).then((response) => {
    return response.text();
  }).then((text) => {
    const script  = document.createElement('script');

    script.type = 'text/javascript';
    script.text = text;

    return script;
  }).then((el) => {
    document.body.appendChild(el);

    return loadSoundfont(name);
  });
};

const parseSoundfont = (context, data) => {
  return Promise.all(Object.keys(data).map(key => {
    const midi = noteToMidi(key);
    const ab = decodeArrayBuffer(data[key].split(',')[1]);

    return context.decodeAudioData(ab).then((buffer) => {
      return [midi, buffer];
    });
  })).then((buffers) => {
    return buffers.reduce((acc, curr) => {
      const [midi, buffer] = curr;

      return acc.set(midi, buffer);
    }, new Map());
  });
};

export const soundfont = (context, name) => {
  const sf = loadSoundfont(name).then(data => parseSoundfont(context, data));

  return Observable.fromPromise(sf);
};
