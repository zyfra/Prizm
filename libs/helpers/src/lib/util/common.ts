/**
 * sort number, string, date by asc or desc
 * */
export function prizmSort<T>(x: T, y: T, asc: boolean = true): number {
  const a = x instanceof Date ? Number(x) : x;
  const b = y instanceof Date ? Number(y) : y;
  let result = 0;

  if (a === b) {
    return result;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    result = a.localeCompare(b);
  } else {
    result = a > b ? 1 : -1;
  }

  if (!asc) {
    if (result === -1) result = 1;
    else if (result === 1) result = -1;
  }

  return result;
}
