import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
export function prizmObservable<T>(
  options: {
    defaultValue?: T;
    postfix?: string;
    /**
     * default name it is `${name}$$`
     * */
    name?: string | symbol;
    subject?: BehaviorSubject<T> | ReplaySubject<T> | AsyncSubject<T> | Subject<T>;
    attributes?: PropertyDescriptor;
  } = {}
): PropertyDecorator {
  return (target: any, key): void => {
    const postfix = options.postfix ?? '$$';
    const defaultValue = options.defaultValue ?? null;
    const subject = options.subject ?? new Subject();
    const memberName = key as string;
    let lastValue: T;
    const hiddenPropertyName = options.name ?? `${memberName}${postfix}`;
    function createBaseProperty(obj: unknown): void {
      Object.defineProperty(obj, hiddenPropertyName, {
        ...{ enumerable: false },
        ...(options?.attributes ?? {}),
        value: subject,
      });
    }

    Object.defineProperty(target, memberName, {
      set(newValue: T) {
        const value = (lastValue = newValue ?? defaultValue);

        let method = this[hiddenPropertyName] as Subject<T>;
        if (!method?.next) {
          createBaseProperty(this);
          method = this[hiddenPropertyName];
        }

        method.next(value);
      },
      get() {
        const method = this[hiddenPropertyName] as Subject<T>;
        if (!method?.next) {
          createBaseProperty(this);
          subject.next((lastValue = defaultValue));
        }
        return lastValue;
      },
    });
  };
}
