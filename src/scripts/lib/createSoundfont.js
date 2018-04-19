import Observable from 'zen-observable';
import httpFetch from './httpFetch';
import storage, { getFromStorage, addToStorage } from './storage';
import { decodeBase64, noteToMIDI } from './Util';
import decodeAudioData from './decodeAudioData';

if (typeof window.MIDI === 'undefined') {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

const nameToUrl = (name, sf = 'FluidR3_GM', format = 'mp3') => {
  const baseURL = 'https://gleitz.github.io';

  return `${baseURL}/midi-js-soundfonts/${sf}/${name}-${format}.js`;
};

const createScript = (text) => {
  const el = document.createElement('script');

  el.type = 'text/javascript';
  el.text = text;

  document.body.appendChild(el);
};

const fetchSoundfont = (name, sf) => {
  if (window.MIDI.Soundfont[name]) {
    return Observable.of(window.MIDI.Soundfont[name]);
  }

  return httpFetch(nameToUrl(name, sf))
    .flatMap((text) => {
      createScript(text);

      return fetchSoundfont(name, sf);
    });
};

const soundfontToArrayBuffer = soundfont => Observable.from(Object.keys(soundfont)).map((key) => {
  const base64 = soundfont[key].split(',')[1];

  return [noteToMIDI(key), decodeBase64(base64)];
}).reduce((prev, [key, buffer]) => ({
  ...prev,
  [key]: buffer,
}), {});

const soundfontToAudioBuffer = (context, soundfont) => Observable.from(Object.keys(soundfont))
  .flatMap(key => decodeAudioData(context, soundfont[key]).map(buffer => [key, buffer]))
  .reduce((prev, [key, buffer]) => ({
    ...prev,
    [key]: buffer,
  }), {});


const createSoundfont = (context, name, soundfont) => storage
  .flatMap(db => getFromStorage(db, soundfont, name)).flatMap((data) => {
    if (data === undefined) {
      return fetchSoundfont(name, soundfont).flatMap(soundfontToArrayBuffer)
        .flatMap(sf => storage.flatMap(db => addToStorage(db, name, soundfont, sf)))
        .flatMap(() => createSoundfont(context, name, soundfont));
    }

    return soundfontToAudioBuffer(context, data);
  });

export default createSoundfont;
