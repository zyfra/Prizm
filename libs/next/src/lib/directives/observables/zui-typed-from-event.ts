import {TuiEventWith, TuiTypedEventTarget} from '@taiga-ui/cdk/types';
import {fromEvent, Observable} from 'rxjs';

export function zuiTypedFromEvent<E extends keyof WindowEventMap>(
    target: Window,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<WindowEventMap[E], typeof target>>;
export function zuiTypedFromEvent<E extends keyof DocumentEventMap>(
    target: Document,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<DocumentEventMap[E], typeof target>>;
export function zuiTypedFromEvent<T extends Element, E extends keyof HTMLElementEventMap>(
    target: T,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<HTMLElementEventMap[E], typeof target>>;
export function zuiTypedFromEvent<
    E extends Event,
    T extends TuiTypedEventTarget<TuiEventWith<E, T>>,
>(
    target: T,
    event: string,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<E, T>>;
export function zuiTypedFromEvent<E extends Event>(
    target: TuiTypedEventTarget<E>,
    event: string,
    options?: AddEventListenerOptions,
): Observable<E>;
export function zuiTypedFromEvent<E extends Event>(
    target: TuiTypedEventTarget<E>,
    event: string,
    options: AddEventListenerOptions = {},
): Observable<E> {
    return fromEvent(target, event, options);
}
