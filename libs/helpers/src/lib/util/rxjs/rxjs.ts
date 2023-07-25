import { Compare } from '../compare/compare';
import { filter, map, throttleTime } from 'rxjs/operators';
import { merge, MonoTypeOperatorFunction, Observable, OperatorFunction, Subscriber } from 'rxjs';

export function filterFalsy<T>(): MonoTypeOperatorFunction<T> {
  return filter(Compare.isFalsy);
}

/**
 * The observable that will be emitted first in the transmitted time interval is used
 * */
export function raceEmit<R = any>(time: number, ...sources: Observable<any>[]): Observable<R> {
  return merge(...sources).pipe(throttleTime(time));
}

export function prizmElementResized$(...elements: Element[]): Observable<ResizeObserverEntry[]> {
  return new Observable((subscriber: Subscriber<ResizeObserverEntry[]>) => {
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => subscriber.next(entries));

    elements.forEach(elem => resizeObserver.observe(elem));

    return (): void => resizeObserver.disconnect();
  });
}

export function filterTruthy<T>(): MonoTypeOperatorFunction<T> {
  return filter(Compare.isTruthy);
}

export function filterNotNullish<T>(): OperatorFunction<T, T> {
  return filter(Compare.isNotNullish);
}

export function filterNullish<T>(): OperatorFunction<T, null | undefined> {
  return filter(Compare.isNullish);
}

export function mapUndefinedToNull<T>(): OperatorFunction<T, T | null> {
  return map((v: T | undefined) => (Compare.isUndefined(v) ? null : (v as T)));
}
