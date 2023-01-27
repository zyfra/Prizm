/**
 * Calculates sum of any number of passed arguments
 */
export function prizmSum(...args: number[]): number {
  return args.reduce((a, b) => a + b, 0);
}
