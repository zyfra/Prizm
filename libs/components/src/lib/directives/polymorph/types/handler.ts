/**
 * A handler function receiving context as input and returning a primitive
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphHandler<C extends object> = (context: C) => string | number;
