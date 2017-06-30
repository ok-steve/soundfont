import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { h } from 'snabbdom/h';

import { midiInput } from '../../lib/func/webmidi/input';
import { midiInputMap } from '../../lib/func/webmidi/input-map';
import { midiMessageEvent } from '../../lib/func/webmidi/message-event';

import { midimessage } from '../actions/midimessage';

import {
  setMidiInputMap,
  setMidiInput,
} from '../actions/webmidi';

import {
  dispatch,
  publish,
  store,
} from '../store';

import {
  select,
  IOption,
} from './select';

const toOption = (map: WebMidi.MIDIInputMap): IOption[] => {
  return Array.from(map.values()).map((input: WebMidi.MIDIInput): IOption => {
    return {
      textContent: input.name,
      value: input.id,
    };
  });
};

const onChange = (e: Event): void => {
  dispatch(setMidiInput(e.target.value));
};

midiInputMap.subscribe((map: WebMidi.MIDIInputMap): void => {
  dispatch(setMidiInputMap(map));
});

store.map((state): string => state.webmidi.current)
  .mergeMap(midiInput)
  .mergeMap(midiMessageEvent)
  .subscribe((e: WebMidi.MIDIMessageEvent): void => {
    publish(midimessage(...e.data));
  });

export const webmidi = ({ current, map }: { current: string, map: WebMidi.MIDIInputMap }): VNode => {
  if (map.size > 0) {
    return select('MIDI Input', {
      attrs: {
        id: 'webmidi',
        value: current,
      },
      on: {
        change: onChange,
      },
    }, toOption(map));
  }
};
