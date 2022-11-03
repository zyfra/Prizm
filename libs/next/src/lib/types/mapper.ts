/**
 * Typed mapping function.
 */
export type PzmMapper<T, G> = (item: T, ...args: any[]) => G;
