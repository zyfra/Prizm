export type Order = 'asc' | 'desc' | boolean;

export function prizmOrderBy<T>(arr: T[], keys: Array<keyof T>, orders: Order[]): T[] {
  return [...arr].sort((a, b) => {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const order = orders[i];

      if (a[key] < b[key]) {
        return order === 'asc' || order === true ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === 'asc' || order === true ? 1 : -1;
      }
    }
    return 0;
  });
}
