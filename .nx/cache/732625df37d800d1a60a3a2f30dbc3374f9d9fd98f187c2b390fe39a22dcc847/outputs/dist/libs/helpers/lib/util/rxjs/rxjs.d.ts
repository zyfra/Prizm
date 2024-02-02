import { MonoTypeOperatorFunction, Observable, OperatorFunction } from 'rxjs';
/**
 * Фильтрует значения, которые являются неправдивыми (falsy).
 * @returns Оператор, который можно использовать с Observable.
 */
export declare function filterFalsy<T>(): MonoTypeOperatorFunction<T>;
/**
 * Использует первый observable, который будет излучен в заданном промежутке времени.
 * @param time - время в миллисекундах
 * @param sources - массив источников Observable
 * @returns Observable, который эмитирует первое значение из источников.
 */
export declare function raceEmit<R = any>(time: number, ...sources: Observable<any>[]): Observable<R>;
/**
 * Создает Observable, который излучает изменения размера элемента.
 * @param elements - массив элементов, для которых должны быть отслеживаны изменения размера.
 * @returns Observable, который эмитирует массив событий изменения размера.
 */
export declare function prizmElementResized$(...elements: Element[]): Observable<ResizeObserverEntry[]>;
/**
 * Фильтрует значения, которые являются истинными (truthy).
 * @returns Оператор, который можно использовать с Observable.
 */
export declare function filterTruthy<T>(): MonoTypeOperatorFunction<T>;
/**
 * Фильтрует значения, которые не являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
export declare function filterNotNullish<T>(): OperatorFunction<T, T>;
/**
 * Фильтрует значения, которые являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
export declare function filterNullish<T>(): OperatorFunction<T, null | undefined>;
/**
 * Преобразует неопределенные значения в null.
 * @returns Оператор, который можно использовать с Observable.
 */
export declare function mapUndefinedToNull<T>(): OperatorFunction<T, T | null>;
/**
 * Перемещает выполнение функции на указанное количество итераций в цикле событий.
 * @param count - Количество итераций цикла событий для перемещения.
 * @returns Оператор, который можно использовать с Observable для продолжения цепочки.
 */
export declare function moveInEventLoopIteration<T>(count: number): MonoTypeOperatorFunction<T>;
export declare function prizmRaceInEmit<T>(inner: Observable<T>[], reloadTime?: number): Observable<T>;
