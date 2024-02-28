/**
 * Coerce the target value to a boolean value. `null`, `undefined` and 'false' (string)
 * will be coerced to `false`. Any other value will be coerced to `true`.
 *
 * If target property has accessors (getter/setter), it will delegate the coercion to the setter.
 * If target property doesn't have accessors, it will create them.
 *
 * This is a decorator factory, it should be used as a decorator (`@CoerceBoolean()`) without
 * executing it as a function in a class definition.
 *
 * @example
 * ```
 * class MyClass {
 *   @PrizmCoerceBoolean()
 *   myProp;
 * }
 * ```
 */
export function PrizmCoerceBoolean() {
  return function (target: any, key: string, propertyDescriptor?: PropertyDescriptor): void {
    // Choose the strategy based on whether accessors are defined for target property
    // If accessors are defined, leverage them, otherwise create them
    !!propertyDescriptor && !!propertyDescriptor.set
      ? coerceUsingAccessors(propertyDescriptor)
      : coerceWithoutAccessors(target, key);
  };

  /**
   * If accessors are defined in the property descriptor,
   * we wrap the original setter in our custom setter that
   * includes a condition for not allowing null, undefined
   * or 'false' (string) values.
   */
  function coerceUsingAccessors(propertyDescriptor: PropertyDescriptor): void {
    const original = propertyDescriptor.set;

    propertyDescriptor.set = function (next) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      original.apply(this, [coerceValue(next)]);
    };
  }

  /**
   * If no accessors are defined in the property descriptor,
   * we define our own get and set accessors for the property.
   */
  function coerceWithoutAccessors(target: any, key: string): void {
    const getter = function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this['__' + key];
    };

    const setter = function (next: any) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this['__' + key] = coerceValue(next);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }

  /**
   * Coerce the value to boolean according to the following rules:
   * `null`, `undefined` and `'false'` (string) will be coerced to `false`.
   * Any other value will be coerced to `true`.
   *
   * @param {any} next - The value to coerce.
   * @returns {boolean} - The coerced value.
   */
  function coerceValue(next: any): boolean {
    return next !== null && next !== undefined && `${next}` !== 'false';
  }
}
