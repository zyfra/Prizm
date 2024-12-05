import { prizmGetNumberWithZero } from '@prizm-ui/core';

export function getArrWithStringNumbers(length: number, start = 1, withZero = false): string[] {
  return Array.from({ length }, (_, i) => {
    const sum = i + start;
    const result = withZero ? prizmGetNumberWithZero(sum) : sum;
    return result + '';
  });
}
