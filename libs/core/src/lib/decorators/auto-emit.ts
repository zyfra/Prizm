import { Subject } from 'rxjs';

export type PrizmAutoEmitCalculate<Val, BaseClass, R = unknown> = (val: Val, value: BaseClass) => R;

export function prizmAutoEmit<T>(
  options: {
    defaultValue?: T;
    /**
     * default name `${name}Change`
     * */
    name?: string | symbol;
    calculate?: PrizmAutoEmitCalculate<any, any, T>;
  } = {}
): PropertyDecorator {
  return (target: any, key): void => {
    const defaultValue = options.defaultValue ?? null;
    const memberName = key as string;
    const hiddenPropertyName = options.name ?? `${memberName}Change`;
    let lastValue: T;
    Object.defineProperty(target, memberName, {
      set(newValue: T) {
        const value = (lastValue = newValue ?? defaultValue);
        const method = this[hiddenPropertyName] as Subject<T>;
        if (typeof method?.next !== 'function') {
          console.error('prizmAutoEmit: Can find subject', {
            method,
            hiddenPropertyName,
            value,
            self: this,
          });
          return;
        }
        method.next(
          (typeof options?.calculate === 'function' ? (options?.calculate?.(value, this) as T) : value) ??
            defaultValue
        );
      },
      get() {
        return lastValue;
      },
    });
  };
}
