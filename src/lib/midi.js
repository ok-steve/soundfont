// Midi to frequency
export function mtof( midi ) {
  return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
}

// Frequency to midi
export function ftom( freq ) {
  return 12 * (Math.log( freq / 440.0 ) / Math.log( 2 )) + 69;
}

// Velocity to gain
export function vtog( vel ) {
  return (vel / 127).toFixed( 2 );
}
