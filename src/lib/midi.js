// Midi to frequency
export const mtof = ( midi ) => {
  return 440.0 * Math.pow(2, (Math.floor( midi ) - 69) / 12.0);
};

// Frequency to midi
export const ftom = ( freq ) => {
  return 12 * (Math.log( freq / 440.0 ) / Math.log( 2 )) + 69;
};

// Velocity to gain
export const vtog = ( vel ) => {
  return (vel / 127);
};
