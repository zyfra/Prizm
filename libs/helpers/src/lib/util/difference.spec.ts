import { difference } from './difference'; // Импортируйте вашу функцию

describe('difference function tests', () => {
  it('should return the difference between the first array and additional arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
  });

  it('should return the original array if no additional arrays are provided', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle arrays with undefined, null, and NaN', () => {
    expect(difference([undefined, null, NaN], [NaN])).toEqual([undefined, null]);
    expect(difference([undefined, null, NaN], [undefined])).toEqual([null, NaN]);
    expect(difference([1, null, 3], [null])).toEqual([1, 3]);
  });

  it('should return an empty array if the first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  it('should return a copy of the first array if no values are excluded', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('should handle multiple arrays to exclude values from', () => {
    expect(difference([1, 2, 3, 4, 5], [2, 3], [4])).toEqual([1, 5]);
  });
});
