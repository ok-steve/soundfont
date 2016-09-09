import _ from 'underscore';

export const each = ( list, iteratee, context ) => {
  return list.forEach( iteratee, context );
};

export const extend = ( destination, sources ) => {
  return _.extend( destination, sources );
};

export const keys = ( object ) => {
  return Object.keys( object );
};

export const range = ( start, stop, step ) => {
  return _.range( start, stop, step );
};
