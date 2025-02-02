// @ts-expect-error lodash置き換え
export const isEqual = (arr, fn) =>
  // @ts-expect-error lodash置き換え
  arr.filter((element, index) => arr.findIndex((step) => fn(element, step)) === index);
