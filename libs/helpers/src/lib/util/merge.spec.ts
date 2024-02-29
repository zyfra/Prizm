import { merge } from './merge'; // Импортируем функцию merge

describe('merge', () => {
  test('merges two simple objects', () => {
    const target1 = { a: 1, b: 2 };
    const obj = { b: 3, c: 4 };
    const expected = { a: 1, b: 2, c: 4 };
    expect(merge(obj, target1)).toEqual(expected);
  });

  test('merges multiple simple objects', () => {
    const target1 = { a: 1, b: 2 };
    const target2 = { a1: 11, b1: 22 };
    const obj = { b: 3, c: 4 };
    const expected = { a: 1, b: 2, c: 4, a1: 11, b1: 22 };
    expect(merge(obj, target1, target2)).toEqual(expected);
  });

  test('performs deep merge', () => {
    const obj = { a: { x: 1 }, b: 2 };
    const target = { a: { y: 2 }, c: 3 };
    const expected = { a: { x: 1, y: 2 }, b: 2, c: 3 };
    expect(merge(obj, target)).toEqual(expected);
  });

  test('handles null in source correctly', () => {
    const target1 = { a: null };
    const obj = { a: { y: 2 }, c: 3 };
    const expected = { a: null, c: 3 };
    expect(merge(obj, target1)).toEqual(expected);
  });

  test('creates new instances for objects in source when missing in target', () => {
    const target = { a: { x: 1 } };
    const obj = {};
    const result = merge(obj, target);
    expect(result.a).toEqual({ x: 1 });
    expect(result.a).not.toBe(target.a); // Ensures a new object was created, not just a reference copy
  });

  test('preserves prototypes during merge', () => {
    class MyClass {
      constructor(public value: number) {}
    }
    const obj = { a: new MyClass(1) };
    const target = {};
    const result = merge(obj, target);
    expect(result.a).toBeInstanceOf(MyClass); // Ensures the prototype is preserved
    expect(result.a.value).toEqual(1);
  });
});
