import { prizmOrderBy } from './order-by';

// предположим, что у нас есть массив объектов для сортировки
const arr = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 24 },
  { name: 'Oliver', age: 30 },
  { name: 'Emma', age: 24 },
  { name: 'William', age: 33 },
];

describe('orderBy', () => {
  it('sorts by age in ascending order', () => {
    const sorted = prizmOrderBy(arr, ['age'], ['asc']);
    expect(sorted).toEqual([
      { name: 'Jane', age: 24 },
      { name: 'Emma', age: 24 },
      { name: 'John', age: 25 },
      { name: 'Oliver', age: 30 },
      { name: 'William', age: 33 },
    ]);
  });

  it('sorts by age in descending order', () => {
    const sorted = prizmOrderBy(arr, ['age'], ['desc']);
    expect(sorted).toEqual([
      { name: 'William', age: 33 },
      { name: 'Oliver', age: 30 },
      { name: 'John', age: 25 },
      { name: 'Jane', age: 24 },
      { name: 'Emma', age: 24 },
    ]);
  });

  it('sorts by name in ascending order', () => {
    const sorted = prizmOrderBy(arr, ['name'], ['asc']);
    expect(sorted).toEqual([
      { name: 'Emma', age: 24 },
      { name: 'Jane', age: 24 },
      { name: 'John', age: 25 },
      { name: 'Oliver', age: 30 },
      { name: 'William', age: 33 },
    ]);
  });

  it('sorts by name in descending order', () => {
    const sorted = prizmOrderBy(arr, ['name'], ['desc']);
    expect(sorted).toEqual([
      { name: 'William', age: 33 },
      { name: 'Oliver', age: 30 },
      { name: 'John', age: 25 },
      { name: 'Jane', age: 24 },
      { name: 'Emma', age: 24 },
    ]);
  });

  it('sorts by age and then name in ascending order', () => {
    const sorted = prizmOrderBy(arr, ['age', 'name'], ['asc', 'asc']);
    expect(sorted).toEqual([
      { name: 'Emma', age: 24 },
      { name: 'Jane', age: 24 },
      { name: 'John', age: 25 },
      { name: 'Oliver', age: 30 },
      { name: 'William', age: 33 },
    ]);
  });
});
