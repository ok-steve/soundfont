import _ from 'underscore';

export function each( list, itaratee, context ) {
  return _.each( list, itaratee, context );
}

export function extend( destination, sources ) {
  return _.extend( destination, sources );
}

export function keys( object ) {
  return _.keys( object );
}

export function range( start, stop, step ) {
  return _.range( start, stop, step );
}
