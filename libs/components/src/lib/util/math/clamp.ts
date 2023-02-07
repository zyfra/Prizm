import { prizmAssert } from '@prizm-ui/core';

/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
export function prizmClamp(value: number, min: number, max: number): number {
  prizmAssert.assert(!isNaN(value));
  prizmAssert.assert(!isNaN(min));
  prizmAssert.assert(!isNaN(max));
  prizmAssert.assert(max >= min);

  return Math.min(max, Math.max(min, value));
}
