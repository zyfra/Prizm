/**
 * Decorator for checking input setter values against a custom assertion which
 * takes value passed to input setter and component instance as arguments.
 * It specifically checks for undefined values and prevents calls to the
 * original setter in this case.
 */
import { prizmAssert } from '../utils';

export function prizmRequiredSetter<T extends Record<string, unknown>, K extends keyof T>(
  assertion?: (a: unknown) => boolean,
  ...args: unknown[]
): MethodDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    target: Record<string, unknown>,
    key,
    { configurable, enumerable, get, set }: PropertyDescriptor
  ): PropertyDescriptor => {
    const { name } = target.constructor;

    return {
      configurable,
      enumerable,
      get,
      set(this: T, value: T[K]): void {
        if (value !== undefined && assertion) {
          prizmAssert.assert(
            assertion.call(this, value),
            `${String(key)} in ${name} received:`,
            value,
            ...args
          );
        }

        if (!set || value === undefined) {
          prizmAssert.assert(value !== undefined, errorSet(key, name));

          return;
        }

        set.call(this, value);
      },
    };
  };
}

function errorSet(key: string | symbol, component: string): string {
  return `Undefined was passed as ${String(key)} to ${component}, setter will not be called`;
}
