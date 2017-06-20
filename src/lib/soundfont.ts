import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

import { noteToMidi } from './conversion';
import { makeRequest } from './network';

/* tslint:disable:interface-name no-namespace */
declare global {
  interface Window {
    MIDI: any;
  }
}
/* tslint:enable:interface-name no-namespace */

if (typeof window.MIDI === 'undefined') {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

export interface ISoundfont {
  A0: string;
  Bb0: string;
  B0: string;

  C1: string;
  Db1: string;
  D1: string;
  Eb1: string;
  E1: string;
  F1: string;
  Gb1: string;
  G1: string;
  Ab1: string;
  A1: string;
  Bb1: string;
  B1: string;

  C2: string;
  Db2: string;
  D2: string;
  Eb2: string;
  E2: string;
  F2: string;
  Gb2: string;
  G2: string;
  Ab2: string;
  A2: string;
  Bb2: string;
  B2: string;

  C3: string;
  Db3: string;
  D3: string;
  Eb3: string;
  E3: string;
  F3: string;
  Gb3: string;
  G3: string;
  Ab3: string;
  A3: string;
  Bb3: string;
  B3: string;

  C4: string;
  Db4: string;
  D4: string;
  Eb4: string;
  E4: string;
  F4: string;
  Gb4: string;
  G4: string;
  Ab4: string;
  A4: string;
  Bb4: string;
  B4: string;

  C5: string;
  Db5: string;
  D5: string;
  Eb5: string;
  E5: string;
  F5: string;
  Gb5: string;
  G5: string;
  Ab5: string;
  A5: string;
  Bb5: string;
  B5: string;

  C6: string;
  Db6: string;
  D6: string;
  Eb6: string;
  E6: string;
  F6: string;
  Gb6: string;
  G6: string;
  Ab6: string;
  A6: string;
  Bb6: string;
  B6: string;

  C7: string;
  Db7: string;
  D7: string;
  Eb7: string;
  E7: string;
  F7: string;
  Gb7: string;
  G7: string;
  Ab7: string;
  A7: string;
  Bb7: string;
  B7: string;

  C8: string;

  [key: string]: string;
}

const decodeArrayBuffer = (base64: string): ArrayBuffer => {
  const raw = atob(base64);
  const len = raw.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = raw.charCodeAt(i);
  }

  return bytes.buffer;
};

const loadSoundfont = (name: string): Promise<ISoundfont> => {
  if (window.MIDI.Soundfont[name]) {
    return Promise.resolve(window.MIDI.Soundfont[name]);
  }

  const baseUrl = 'https://gitcdn.xyz/repo';
  const repo = 'gleitz/midi-js-soundfonts/gh-pages';
  const format = 'ogg';
  const library = 'FluidR3_GM';

  return makeRequest(
    `${baseUrl}/${repo}/${library}/${name}-${format}.js`
 ).then((response: Response): Promise<string> => {
    return response.text();
  }).then((text: string): HTMLElement => {
    const script  = document.createElement('script');

    script.type = 'text/javascript';
    script.text = text;

    return script;
  }).then((el: HTMLElement): Promise<ISoundfont> => {
    document.body.appendChild(el);

    return loadSoundfont(name);
  });
};

const parseSoundfont = (context: AudioContext, data: ISoundfont): Promise<Map<number, AudioBuffer>> => {
  return Promise.all(Object.keys(data).map(key => {
    const midi = noteToMidi(key);
    const ab = decodeArrayBuffer(data[key].split(',')[1]);

    return context.decodeAudioData(ab).then((buffer: AudioBuffer): [number, AudioBuffer] => {
      return [midi, buffer];
    });
  })).then((buffers: Array<[number, AudioBuffer]>): Map<number, AudioBuffer> => {
    return buffers.reduce((acc: Map<number, AudioBuffer>, curr: [number, AudioBuffer]): Map<number, AudioBuffer> => {
      const [midi, buffer] = curr;

      return acc.set(midi, buffer);
    }, new Map());
  });
};

export const soundfont = (context: AudioContext, name: string): Observable<Map<number, AudioBuffer>> => {
  const sf = loadSoundfont(name).then(data => parseSoundfont(context, data));

  return Observable.fromPromise(sf);
};
