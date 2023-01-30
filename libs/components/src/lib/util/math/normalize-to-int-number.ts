/**
 * Normalizes any number to an integer within inclusive range
 *
 * @param value
 * @param min lower inclusive integer
 * @param max upper inclusive integer
 * @return an integer between min and max inclusive
 */
export function prizmNormalizeToIntNumber(value: number, min: number, max: number): number {
  console.assert(Number.isInteger(min));
  console.assert(Number.isInteger(max));
  console.assert(min <= max);

  if (isNaN(value) || value <= min) {
    return min;
  }

  if (value >= max) {
    return max;
  }

  return Math.round(value);
}
