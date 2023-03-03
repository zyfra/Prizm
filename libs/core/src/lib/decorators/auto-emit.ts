import { Subject } from 'rxjs';

export function prizmAutoEmit<T>(
  options: {
    defaultValue?: T;
    name?: string;
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
        method.next(value);
      },
      get() {
        return lastValue;
      },
    });
  };
}
