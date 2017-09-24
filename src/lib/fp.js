export const contains = (item, list) => {
  return list.indexOf(item) !== -1;
};

export const has = (prop, obj) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const range = (start, stop) => {
  const n: number = stop - start;
  const step: number = 1;

  return Array.from(Array(n), (_, i) => start + i * step);
};
