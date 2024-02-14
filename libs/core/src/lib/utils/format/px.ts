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

/**
 * Checks if the provided string is a valid size string.
 * This example only checks for empty strings or strings without numeric characters,
 * adjust the logic as necessary for your use case.
 *
 * @param {string} value - The string to check.
 * @return {boolean} True if the string is valid, false otherwise.
 */
export function prizmIsValidSizeString(value: string): boolean {
  return value.length > 0 && /\d/.test(value);
}
