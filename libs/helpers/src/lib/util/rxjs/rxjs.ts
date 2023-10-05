import { Compare } from '../compare/compare';
import { filter, map, observeOn, throttleTime } from 'rxjs/operators';
import {
  asyncScheduler,
  merge,
  MonoTypeOperatorFunction,
  Observable,
  OperatorFunction,
  Subscriber,
} from 'rxjs';

/**
 * Фильтрует значения, которые являются неправдивыми (falsy).
 * @returns Оператор, который можно использовать с Observable.
 */
export function filterFalsy<T>(): MonoTypeOperatorFunction<T> {
  return filter(Compare.isFalsy);
}

/**
 * Использует первый observable, который будет излучен в заданном промежутке времени.
 * @param time - время в миллисекундах
 * @param sources - массив источников Observable
 * @returns Observable, который эмитирует первое значение из источников.
 */
export function raceEmit<R = any>(time: number, ...sources: Observable<any>[]): Observable<R> {
  return merge(...sources).pipe(throttleTime(time));
}

/**
 * Создает Observable, который излучает изменения размера элемента.
 * @param elements - массив элементов, для которых должны быть отслеживаны изменения размера.
 * @returns Observable, который эмитирует массив событий изменения размера.
 */
export function prizmElementResized$(...elements: Element[]): Observable<ResizeObserverEntry[]> {
  return new Observable((subscriber: Subscriber<ResizeObserverEntry[]>) => {
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => subscriber.next(entries));

    elements.forEach(elem => resizeObserver.observe(elem));

    return (): void => resizeObserver.disconnect();
  });
}

/**
 * Фильтрует значения, которые являются истинными (truthy).
 * @returns Оператор, который можно использовать с Observable.
 */
export function filterTruthy<T>(): MonoTypeOperatorFunction<T> {
  return filter(Compare.isTruthy);
}

/**
 * Фильтрует значения, которые не являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
export function filterNotNullish<T>(): OperatorFunction<T, T> {
  return filter(Compare.isNotNullish);
}

/**
 * Фильтрует значения, которые являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
export function filterNullish<T>(): OperatorFunction<T, null | undefined> {
  return filter(Compare.isNullish);
}

/**
 * Преобразует неопределенные значения в null.
 * @returns Оператор, который можно использовать с Observable.
 */
export function mapUndefinedToNull<T>(): OperatorFunction<T, T | null> {
  return map((v: T | undefined) => (Compare.isUndefined(v) ? null : (v as T)));
}

/**
 * Перемещает выполнение функции на указанное количество итераций в цикле событий.
 * @param count - Количество итераций цикла событий для перемещения.
 * @returns Оператор, который можно использовать с Observable для продолжения цепочки.
 */
export function moveInEventLoopIteration<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    if (!count) return source;

    source = source.pipe(observeOn(asyncScheduler, 0));

    if (count > 1) {
      source = source.pipe(moveInEventLoopIteration(count - 1));
    }

    return source;
  };
}
