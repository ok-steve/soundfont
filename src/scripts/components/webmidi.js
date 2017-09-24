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

import { select } from './select';

const toOption = (map) => {
  return Array.from(map.values()).map((input) => {
    return {
      textContent: input.name,
      value: input.id,
    };
  });
};

const onChange = (e) => {
  dispatch(setMidiInput(e.target.value));
};

midiInputMap.subscribe((map) => {
  dispatch(setMidiInputMap(map));
});

store.subscribe((state) => {
  if (state.webmidi.current !== '') {
    midiInput(state.webmidi.current)
      .mergeMap(midiMessageEvent)
      .subscribe((e: WebMidi.MIDIMessageEvent) => {
        publish(midimessage(...e.data));
      });
  }
});

export const webmidi = ({ current, map }) => {
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
