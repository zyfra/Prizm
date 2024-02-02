import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
export declare function prizmObservable<T>(options?: {
    defaultValue?: T;
    postfix?: string;
    /**
     * default name it is `${name}$$`
     * */
    name?: string | symbol;
    subject?: (BehaviorSubject<T> | ReplaySubject<T> | AsyncSubject<T> | Subject<T>) | (() => BehaviorSubject<T> | ReplaySubject<T> | AsyncSubject<T> | Subject<T>);
    attributes?: PropertyDescriptor;
}): PropertyDecorator;
