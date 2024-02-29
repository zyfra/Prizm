import { prizmAssert } from '../assert';

/**
 * Converts a numeric value to a string with 'px' unit.
 * Assuming this is the purpose of the prizmPx function.
 *
 * @param {number} value - The numeric value to convert.
 * @return {string} The value converted to a string with 'px' appended.
 */
export function prizmPx(value: number | string): string {
  prizmAssert.assert(Number.isFinite(value), `Value must be finite number`);

  return `${value}px`;
}
