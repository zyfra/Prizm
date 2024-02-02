import { Observable } from 'rxjs';
export interface PrizmPressedObservableOptions {
    onlyTrusted: boolean;
}
export declare function prizmPressedObservable(element: Element, { onlyTrusted }?: PrizmPressedObservableOptions): Observable<boolean>;
