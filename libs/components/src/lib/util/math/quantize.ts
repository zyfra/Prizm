import { prizmAssert } from '@prizm-ui/core';

/**
 * Rounds a number to the closest value in a fixed discrete series
 *
 * @param value
 * @param quantum series step
 */
export function prizmQuantize(value: number, quantum: number): number {
  prizmAssert.assert(Number.isFinite(value));
  prizmAssert.assert(Number.isFinite(quantum));
  prizmAssert.assert(quantum > 0);

  const remainder = value % quantum;

  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
