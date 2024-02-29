import { orderBy } from './order-by';

interface User {
  user: string;
  age: number;
}

describe('orderBy function', () => {
  const users: User[] = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 36 },
  ];

  it('should sort by a single property in ascending order by default', () => {
    const result = orderBy(users, [o => o.age]);
    expect(result).toEqual([
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'fred', age: 48 },
    ]);
  });

  it('should sort by a single property in descending order', () => {
    const result = orderBy(users, [o => o.age], ['desc']);
    expect(result).toEqual([
      { user: 'fred', age: 48 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 },
      { user: 'barney', age: 34 },
    ]);
  });

  it('should sort by multiple properties', () => {
    const result = orderBy(users, [o => o.user, o => o.age], ['asc', 'desc']);
    expect(result).toEqual([
      { user: 'barney', age: 36 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 48 },
      { user: 'fred', age: 40 },
    ]);
  });

  it('should handle mix of ascending and descending orders for multiple properties', () => {
    const result = orderBy(users, [o => o.user, o => o.age], ['desc', 'asc']);
    expect(result).toEqual([
      { user: 'fred', age: 40 },
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
    ]);
  });

  // Continue from the previous it cases...

  it('should sort by a single property name (string) in ascending order', () => {
    const result = orderBy(users, ['age']);
    expect(result).toEqual([
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'fred', age: 48 },
    ]);
  });

  it('should sort by multiple property names in specified order', () => {
    const result = orderBy(users, ['user', 'age'], ['asc', 'desc']);
    expect(result).toEqual([
      { user: 'barney', age: 36 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 48 },
      { user: 'fred', age: 40 },
    ]);
  });

  it('should sort by a single property name in descending order', () => {
    const result = orderBy(users, ['age'], ['desc']);
    expect(result).toEqual([
      { user: 'fred', age: 48 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 },
      { user: 'barney', age: 34 },
    ]);
  });

  it('should handle mix of property names and orders for sorting', () => {
    const result = orderBy(users, ['user', 'age'], ['desc', 'asc']);
    expect(result).toEqual([
      { user: 'fred', age: 40 },
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
    ]);
  });
});
