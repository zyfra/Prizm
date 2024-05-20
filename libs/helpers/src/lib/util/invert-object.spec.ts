import { prizmInvertObject } from './invert-object';

describe('prizmInvertObject', () => {
  it('should invert keys and values of a simple object', () => {
    const originalObject = {
      a: '1',
      b: '2',
      c: '3',
    };
    const expectedInvertedObject = {
      '1': 'a',
      '2': 'b',
      '3': 'c',
    };

    const result = prizmInvertObject(originalObject);
    expect(result).toEqual(expectedInvertedObject);
  });

  it('should handle objects with number keys and string values', () => {
    const originalObject = {
      1: 'a',
      2: 'b',
      3: 'c',
    };
    const expectedInvertedObject = {
      a: '1',
      b: '2',
      c: '3',
    };

    const result = prizmInvertObject(originalObject);
    expect(result).toEqual(expectedInvertedObject);
  });

  it('should handle objects with mixed keys and values', () => {
    const originalObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const expectedInvertedObject = {
      1: 'a',
      2: 'b',
      3: 'c',
    };

    const result = prizmInvertObject(originalObject);
    expect(result).toEqual(expectedInvertedObject);
  });

  it('should throw an error if the values are not primitive types', () => {
    const originalObject = {
      a: { nested: 'object' },
      b: '2',
      c: '3',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => prizmInvertObject(originalObject)).toThrow();
  });

  it('should handle empty objects', () => {
    const originalObject = {};
    const expectedInvertedObject = {};

    const result = prizmInvertObject(originalObject);
    expect(result).toEqual(expectedInvertedObject);
  });
});
