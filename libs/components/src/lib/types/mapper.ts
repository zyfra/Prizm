/**
 * Typed mapping function.
 */
export type PrizmMapper<T, G> = (item: T, ...args: unknown[]) => G;
