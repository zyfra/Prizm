import {fromEvent, Observable} from 'rxjs';
import {ZuiEventWith, ZuiTypedEventTarget} from '../types';

export function zuiTypedFromEvent<E extends keyof WindowEventMap>(
    target: Window,
    event: E,
    options?: AddEventListenerOptions,
): Observable<ZuiEventWith<WindowEventMap[E], typeof target>>;
export function zuiTypedFromEvent<E extends keyof DocumentEventMap>(
    target: Document,
    event: E,
    options?: AddEventListenerOptions,
): Observable<ZuiEventWith<DocumentEventMap[E], typeof target>>;
export function zuiTypedFromEvent<T extends Element, E extends keyof HTMLElementEventMap>(
    target: T,
    event: E,
    options?: AddEventListenerOptions,
): Observable<ZuiEventWith<HTMLElementEventMap[E], typeof target>>;
export function zuiTypedFromEvent<
    E extends Event,
    T extends ZuiTypedEventTarget<ZuiEventWith<E, T>>,
>(
    target: T,
    event: string,
    options?: AddEventListenerOptions,
): Observable<ZuiEventWith<E, T>>;
export function zuiTypedFromEvent<E extends Event>(
    target: ZuiTypedEventTarget<E>,
    event: string,
    options?: AddEventListenerOptions,
): Observable<E>;
export function zuiTypedFromEvent<E extends Event>(
    target: ZuiTypedEventTarget<E>,
    event: string,
    options: AddEventListenerOptions = {},
): Observable<E> {
    return fromEvent(target, event, options);
}
