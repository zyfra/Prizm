import { BehaviorSubject } from 'rxjs';
export function prizmObservable<T>(
  options: {
    defaultValue?: T;
    prefix?: string;
    name?: string;
  } = {}
): PropertyDecorator {
  return (target: any, key): void => {
    const prefix = options.prefix ?? 'prizm_';
    const defaultValue = options.defaultValue ?? null;
    const memberName = key as string;
    const hiddenPropertyName = options.name ?? `${prefix}${memberName}`;
    Object.defineProperty(target, memberName, {
      set(newValue: T) {
        const value = newValue ?? defaultValue;
        const method = this[hiddenPropertyName] as BehaviorSubject<T>;
        if (!(method instanceof BehaviorSubject)) {
          this[hiddenPropertyName] = new BehaviorSubject(value);
        } else method.next(value);
      },
      get() {
        let method = this[hiddenPropertyName] as BehaviorSubject<T>;
        if (!(method instanceof BehaviorSubject)) {
          this[hiddenPropertyName] = method = new BehaviorSubject(defaultValue);
        }
        return method.value;
      },
    });
  };
}
