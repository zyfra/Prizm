/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
export declare function prizmPure<T>(
  _target: object,
  propertyKey: string,
  { get, enumerable, value }: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T>;
