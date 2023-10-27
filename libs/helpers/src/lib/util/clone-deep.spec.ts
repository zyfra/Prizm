import { prizmCloneDeep } from './clone-deep';

describe('prizmCloneDeep', () => {
  it('clones simple objects', () => {
    const obj = { a: 1, b: 2 };
    const clone = prizmCloneDeep(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  it('clones nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    const clone = prizmCloneDeep(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.a).not.toBe(obj.a);
    expect(clone.a.b).not.toBe(obj.a.b);
  });

  it('clones arrays', () => {
    const arr = [1, 2, 3, [4, 5]];
    const clone = prizmCloneDeep(arr);
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
    expect(clone[3]).not.toBe(arr[3]);
  });

  it('clones dates', () => {
    const date = new Date();
    const clone = prizmCloneDeep(date);
    expect(clone).toEqual(date);
    expect(clone).not.toBe(date);
  });

  it('does not clone functions', () => {
    const obj = { func: () => {} };
    const clone = prizmCloneDeep(obj);
    expect(clone.func).toBe(obj.func);
  });
});
