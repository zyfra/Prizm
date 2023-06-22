import { prizmAssert } from '../assert';

export function prizmPx(value: number): string {
  prizmAssert.assert(Number.isFinite(value), `Value must be finite number`);

  return `${value}px`;
}
