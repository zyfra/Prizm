/**
 * Typed mapping function.
 */
export type ZuiMapper<T, G> = (item: T, ...args: any[]) => G;
