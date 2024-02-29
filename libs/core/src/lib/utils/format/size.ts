/**
 * Validates if the provided string is a valid CSS size string.
 *
 * @param {string} value - The string to check.
 * @return {boolean} True if the string is a valid CSS size string, false otherwise.
 */
export function prizmIsValidSizeString(value: string): boolean {
  // Updated regex to check for numeric value followed by a valid CSS unit
  return !!value && /^\d+(.\d+)?(px|em|rem|vh|vw|vmin|vmax)$/.test(value);
}
