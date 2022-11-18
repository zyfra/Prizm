import { concat, merge, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  ignoreElements,
  mapTo,
  repeat,
  shareReplay,
  startWith,
  switchMapTo,
  take,
  withLatestFrom,
} from 'rxjs/operators';
import { prizmIsAlive } from './is-alive';
import { PrizmOwnerDocumentException } from '../exceptions';
import { prizmIsNativeFocused } from '../util';
import { prizmTypedFromEvent } from './typed-from-event';

let documentMouseUpIsAlive$: Observable<boolean>;
let documentMouseDownIsAlive$: Observable<boolean>;

export function prizmFocusVisibleObservable(element: Element): Observable<boolean> {
    const elementBlur$ = prizmTypedFromEvent(element, 'blur');
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new PrizmOwnerDocumentException();
    }

    if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
        documentMouseUpIsAlive$ = prizmTypedFromEvent(ownerDocument, 'mouseup', {
            capture: true,
        }).pipe(
            prizmIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
        documentMouseDownIsAlive$ = prizmTypedFromEvent(ownerDocument, 'mousedown', {
            capture: true,
        }).pipe(
            prizmIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
    }

    return merge(
        // focus events excluding ones that came right after mouse action
        concat(
            prizmTypedFromEvent(element, 'focus').pipe(take(1)),
            // filtering out blur events when element remains focused so that we ignore browser tab focus loss
            elementBlur$.pipe(
                filter(() => !prizmIsNativeFocused(element)),
                take(1),
                ignoreElements(),
            ),
        ).pipe(
            repeat(),
            withLatestFrom(
                documentMouseDownIsAlive$,
                documentMouseUpIsAlive$,
                (_event, elementActual, documentActual) =>
                    elementActual || documentActual,
            ),
            filter(isUserFocus => !isUserFocus),
        ),
    ).pipe(
        switchMapTo(elementBlur$.pipe(mapTo(false), take(1), startWith(true))),
        distinctUntilChanged(),
    );
}
