import _ from 'underscore';

export function each( list, itaratee, context ) {
  return _.each( list, itaratee, context );
}

export function keys( object ) {
  return _.keys( object );
}

export function range( start, stop, step ) {
  return _.range( start, stop, step );
}
