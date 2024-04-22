import { difference } from './difference';

describe('difference function tests', () => {
  test('returns the correct difference between two arrays', () => {
    const array = [1, 2, 3, 4];
    const values = [[2, 4]];
    const expected = [1, 3];
    expect(difference(array, ...values)).toEqual(expected);
  });

  test('returns the original array when no additional arrays are provided', () => {
    const array = [1, 2, 3];
    const values: any[] = [];
    const expected = [1, 2, 3];
    expect(difference(array, ...values)).toEqual(expected);
  });

  test('returns an empty array if the first array is empty', () => {
    const array = [] as any[];
    const values = [[1, 2], [3]];
    expect(difference(array, ...values)).toEqual([]);
  });

  test('excludes elements from multiple arrays', () => {
    const array = [1, 2, 3, 4, 5];
    const values = [[1, 2], [4]];
    const expected = [3, 5];
    expect(difference(array, ...values)).toEqual(expected);
  });

  test('handles arrays with non-numeric elements', () => {
    const array = ['apple', 'banana', 'cherry'];
    const values = [['banana'], ['cherry']];
    const expected = ['apple'];
    expect(difference(array, ...values)).toEqual(expected);
  });

  test('returns a copy of the original array if there are no common elements', () => {
    const array = [1, 2, 3];
    const values = [[4, 5]];
    const expected = [1, 2, 3];
    expect(difference(array, ...values)).toEqual(expected);
  });

  test('handles null or undefined input gracefully', () => {
    const array = null as any;
    const values = [[1, 2], [3]];
    expect(difference(array, ...values)).toEqual([]);
  });
});
