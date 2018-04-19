import Observable from 'zen-observable';

const scan = (source, accumulator, seed) => {
  let value = seed;

  return source.map(x => {
    value = value ? accumulator(value, x) : x;

    return value;
  });
};

export default scan;
