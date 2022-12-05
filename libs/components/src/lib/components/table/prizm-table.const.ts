export function prizmDefaultSort<T>(x: T, y: T): number {
  const a = x instanceof Date ? Number(x) : x;
  const b = y instanceof Date ? Number(y) : y;

  if (a === b) {
    return 0;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  return a > b ? 1 : -1;
}
