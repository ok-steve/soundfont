export const each = ( list, iteratee, context ) => {
  return list.forEach( iteratee, context );
};

export const assign = ( destination, ...sources ) => {
  return Object.assign( destination, ...sources );
};

export const has = ( object, key ) => {
  return Object.keys( object ).includes( key );
};

export const keys = ( object ) => {
  return Object.keys( object );
};

export const range = ( start, stop, step = 1 ) => {
  if ( !stop ) {
    stop = start || 0;
    start = 0;
  }

  const n = stop - start;

  return Array.from(Array(n), (_, i) => start + i * step);
};

export const toArray = ( iterator ) => {
  const iter = iterator.values(),
    items = [];

  for ( let item = iter.next(); item && !item.done; item = iter.next() ) {
    items.push( item.value );
  }

  return items;
};
