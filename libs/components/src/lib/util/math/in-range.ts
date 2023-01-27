/**
 * Checks if the value is in range
 *
 * @param value
 * @param fromInclude lower inclusive limit
 * @param toExclude upper exclusive limit
 */
export function prizmInRange(value: number, fromInclude: number, toExclude: number): boolean {
  console.assert(!isNaN(value));
  console.assert(!isNaN(fromInclude));
  console.assert(!isNaN(toExclude));
  console.assert(fromInclude < toExclude);

  return value >= fromInclude && value < toExclude;
}
