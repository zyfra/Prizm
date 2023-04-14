import { PrizmBooleanHandler } from '../types/handler';
import { PRIZM_LOG_LEVEL, prizmAssert } from '../utils';

/**
 * Decorator for checking input values for undefined. You can also pass
 * optional assertion to check input against.
 *
 * CAUTION: This decorator overwrites other getters and setters.
 */
export function prizmDefaultProp<T extends Record<string, any>, K extends keyof T>(
  assertion?: PrizmBooleanHandler<T[K]>,
  ...args: unknown[]
): PropertyDecorator {
  return (target, key): void => {
    const { name } = target.constructor;
    const errorGetDefaultMessage = errorGetDefault(key, name);
    const errorSetDefaultMessage = errorSetDefault(key, name);

    Object.defineProperty(target, key, {
      get(): undefined {
        prizmAssert.assertWarning(false, errorGetDefaultMessage);

        return undefined;
      },
      set(this: T, initialValue: T[K]) {
        const isValid = initialValue !== undefined;
        const errorMessage = errorSetDefaultInitial(key, name);
        let currentValue = initialValue;

        prizmAssert.assertWarning(isValid, errorMessage);

        if (isValid && assertion) {
          prizmAssert.assertWarning(
            assertion.call(this, initialValue),
            `${String(key)} in ${name} received:`,
            initialValue,
            ...args
          );
        }

        Object.defineProperty(this, key, {
          get(): T[K] {
            return currentValue;
          },
          set(this: T, value: T[K]) {
            const isValid = value !== undefined;
            const backupValue = initialValue;

            prizmAssert.assertWarning(isValid, errorSetDefaultMessage, String(backupValue));

            if (isValid && assertion) {
              prizmAssert.assertWarning(
                assertion.call(this, value),
                `${String(key)} in ${name} received:`,
                value,
                ...args
              );
            }

            currentValue = isValid ? value : backupValue;
          },
        });
      },
    });
  };
}

function errorGetDefault(key: string | symbol, component: string): string {
  return `Default value for ${String(key)} was not provided in ${component}, error in Prizm UI`;
}

function errorSetDefault(key: string | symbol, component: string): string {
  return `Undefined was passed as ${String(
    key
  )} to ${component}, which is invalid input, using default value:`;
}

function errorSetDefaultInitial(key: string | symbol, component: string): string {
  return `Undefined was passed as default value for ${String(key)} to ${component}, error in Prizm`;
}
