import { Buffer, MultiPlayer } from 'tone';

import { GM } from './general-midi';

if ( typeof window.MIDI === 'undefined' ) {
  window.MIDI = {};
}

window.MIDI.Soundfont = window.MIDI.Soundfont || {};

const decodeArrayBuffer = base64 => {
  const raw = atob( base64 );
  const len = raw.length;
  const bytes = new Uint8Array( len );

  for ( let i = 0; i < len; i++ ) {
    bytes[i] = raw.charCodeAt( i );
  }

  return bytes.buffer;
};

export class SoundfontPlayer extends MultiPlayer {
  synth = null;

  constructor( type = 'acoustic_grand_piano' ) {
    super();

    this.instrument = type;
  }

  get instrument() {
    return GM.filter(i => i.id === this.type)[0];
  }

  set instrument( type ) {
    this.type = type;
    this.load( this.type );
  }

  load( name ) {
    this.fetchSoundfont( name ).then(response => {
      Object.keys( response ).forEach(key => {
        const buffer = decodeArrayBuffer( response[key].split(',')[1] );

        this.context.decodeAudioData( buffer ).then(audio => {
          this.add( key, new Buffer( audio ) );
        });
      });
    });
  }

  fetchSoundfont( name ) {
    if ( window.MIDI.Soundfont[name] ) {
      return Promise.resolve( window.MIDI.Soundfont[name] );
    }

    const format = 'ogg';

    return fetch(
      `https://gitcdn.xyz/repo/gleitz/midi-js-soundfonts/gh-pages/FluidR3_GM/${name}-${format}.js`
    ).then(response => {
      if ( response.ok ) {
        return response.text();
      } else {
        return Promise.reject( response );
      }
    }).then(response => {
      const script = document.createElement('script');

      script.type = 'text/javascript';
      script.text = response;

      return script;
    }).then(response => {
      document.body.appendChild( response );

      return this.fetchSoundfont( name );
    });
  }

  set( params ) {
    if ( params.type ) {
      this.instrument = params.type;
    }
  }
}
