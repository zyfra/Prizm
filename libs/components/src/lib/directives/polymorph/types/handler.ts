import type { PolymorphPrimitive } from './primitive';

/**
 * A handler function receiving context as input and returning a primitive
 */
export type PolymorphHandler<C> = (context: C) => PolymorphPrimitive;
