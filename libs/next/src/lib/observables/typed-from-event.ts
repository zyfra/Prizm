import {fromEvent, Observable} from 'rxjs';
import {PzmEventWith, ZuiTypedEventTarget} from '../types';

export function pzmTypedFromEvent<E extends keyof WindowEventMap>(
    target: Window,
    event: E,
    options?: AddEventListenerOptions,
): Observable<PzmEventWith<WindowEventMap[E], typeof target>>;
export function pzmTypedFromEvent<E extends keyof DocumentEventMap>(
    target: Document,
    event: E,
    options?: AddEventListenerOptions,
): Observable<PzmEventWith<DocumentEventMap[E], typeof target>>;
export function pzmTypedFromEvent<T extends Element, E extends keyof HTMLElementEventMap>(
    target: T,
    event: E,
    options?: AddEventListenerOptions,
): Observable<PzmEventWith<HTMLElementEventMap[E], typeof target>>;
export function pzmTypedFromEvent<
    E extends Event,
    T extends ZuiTypedEventTarget<PzmEventWith<E, T>>,
>(
    target: T,
    event: string,
    options?: AddEventListenerOptions,
): Observable<PzmEventWith<E, T>>;
export function pzmTypedFromEvent<E extends Event>(
    target: ZuiTypedEventTarget<E>,
    event: string,
    options?: AddEventListenerOptions,
): Observable<E>;
export function pzmTypedFromEvent<E extends Event>(
    target: ZuiTypedEventTarget<E>,
    event: string,
    options: AddEventListenerOptions = {},
): Observable<E> {
    return fromEvent(target, event, options);
}
