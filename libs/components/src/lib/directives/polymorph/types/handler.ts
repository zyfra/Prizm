/**
 * A handler function receiving context as input and returning a primitive
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphHandler<C = any> = (context: C) => string | number;
