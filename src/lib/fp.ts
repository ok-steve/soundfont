export const contains = (item: any, list: any[]): boolean => {
  return list.indexOf(item) !== -1;
};

export const has = (prop: any, obj: any): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const range = (start: number, stop: number): number[] => {
  const n: number = stop - start;
  const step: number = 1;

  return Array.from(Array(n), (_, i) => start + i * step);
};
