/**
 * A handler function receiving context as input and returning a primitive
 */
export type PolymorphHandler<C = any> = (context: C) => string | number;
