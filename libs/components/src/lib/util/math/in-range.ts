import { prizmAssert } from '@prizm-ui/core';

/**
 * Checks if the value is in range
 *
 * @param value
 * @param fromInclude lower inclusive limit
 * @param toExclude upper exclusive limit
 */
export function prizmInRange(value: number, fromInclude: number, toExclude: number): boolean {
  prizmAssert.assert(!isNaN(value));
  prizmAssert.assert(!isNaN(fromInclude));
  prizmAssert.assert(!isNaN(toExclude));
  prizmAssert.assert(fromInclude < toExclude);

  return value >= fromInclude && value < toExclude;
}
