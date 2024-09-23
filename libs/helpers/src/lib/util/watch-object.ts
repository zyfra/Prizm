import { BehaviorSubject, Subject } from 'rxjs';

export function watchObject<T extends Record<string, any>>(obj: T, subject: Subject<T>): T {
  const createHandler = (target: T): ProxyHandler<T> => {
    return {
      set(target, property, value) {
        // Если новое значение - объект, оборачиваем его в прокси
        if (typeof value === 'object' && value !== null) {
          target[property as keyof T] = new Proxy(value, createHandler(value));
        } else {
          target[property as keyof T] = value;
        }
        // subject.next(structuredClone(target));
        subject.next(proxy);
        return true;
      },
      deleteProperty(target, property) {
        delete target[property as keyof T];
        // subject.next(structuredClone(target));
        subject.next(proxy);
        return true;
      },
    };
  };

  // Рекурсивно оборачиваем все вложенные объекты в прокси
  const recursiveProxy = (obj: T): T => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        obj[key] = new Proxy(obj[key], createHandler(obj[key]));
      }
    });
    return new Proxy(obj, createHandler(obj));
  };

  const proxy = recursiveProxy(obj);

  return proxy;
}

export class PrizmProxyObject<T extends Record<string, any>> extends BehaviorSubject<T> {
  constructor(obj: T) {
    super(null as any);
    const watched = watchObject(obj, this);
    this.next(watched);
  }
}
