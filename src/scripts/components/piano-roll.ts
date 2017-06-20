import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { pitchToMidi } from '../../lib/conversion';

import {
  keydown,
  keyup,
  pointerdown,
  pointerup,
  PointerEvent,
} from '../../lib/events';

import { MIDIStatus } from '../../lib/general-midi';

import { midimessage } from '../actions/midimessage';

import {
  publish,
  store,
} from '../store';

const el = document.querySelector('.c-piano-roll');
const octave = store.map((state): number => state.octave);

type PianoEvent = PointerEvent | KeyboardEvent;

const getNote = (oct: number, e: PianoEvent): number => {
  return pitchToMidi(oct, parseInt(e.target.dataset.note, 10));
};

const isSpaceOrEnter = (keyCode: number): boolean => {
  return keyCode === 32 || keyCode === 13;
};

const noteon = Observable.merge(
  pointerdown(el),
  keydown(el).filter((e: KeyboardEvent): boolean => isSpaceOrEnter(e.keyCode)),
).withLatestFrom(octave);

const noteoff = Observable.merge(
  pointerup(el),
  keyup(el).filter((e: KeyboardEvent): boolean => isSpaceOrEnter(e.keyCode)),
).withLatestFrom(octave);

noteon.subscribe(([e, oct]: [PianoEvent, number]): void => {
  const note = getNote(oct, e);

  e.target.classList.add('is-pressed');
  publish(midimessage(MIDIStatus.NoteOn, note));
});

noteoff.subscribe(([e, oct]: [PianoEvent, number]): void => {
  const note = getNote(oct, e);

  e.target.classList.remove('is-pressed');
  publish(midimessage(MIDIStatus.NoteOff, note));
});
