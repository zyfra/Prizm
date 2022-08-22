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
import { zuiIsAlive } from './is-alive';
import { ZuiOwnerDocumentException } from '../exceptions';
import { zuiIsNativeFocused } from '../util';
import { zuiTypedFromEvent } from './typed-from-event';

let documentMouseUpIsAlive$: Observable<boolean>;
let documentMouseDownIsAlive$: Observable<boolean>;

export function zuiFocusVisibleObservable(element: Element): Observable<boolean> {
    const elementBlur$ = zuiTypedFromEvent(element, 'blur');
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new ZuiOwnerDocumentException();
    }

    if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
        documentMouseUpIsAlive$ = zuiTypedFromEvent(ownerDocument, 'mouseup', {
            capture: true,
        }).pipe(
            zuiIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
        documentMouseDownIsAlive$ = zuiTypedFromEvent(ownerDocument, 'mousedown', {
            capture: true,
        }).pipe(
            zuiIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
    }

    return merge(
        // focus events excluding ones that came right after mouse action
        concat(
            zuiTypedFromEvent(element, 'focus').pipe(take(1)),
            // filtering out blur events when element remains focused so that we ignore browser tab focus loss
            elementBlur$.pipe(
                filter(() => !zuiIsNativeFocused(element)),
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
