import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { merge, Observable, of, timer } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  repeatWhen,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { pzmTypedFromEvent } from '../observables/typed-from-event';
import { pzmGetActualTarget } from '../util/dom/get-actual-target';
import { pzmGetDocumentOrShadowRoot } from '../util/dom/pzm-get-document-or-shadow-root';


export const PZM_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    `Active element on the document for ActiveZone`,
    {
        factory: (): Observable<any> => {
            const removedElement$ = inject(PZM_REMOVED_ELEMENT);
            const windowRef = inject(WINDOW);
            const documentRef = inject(DOCUMENT);
            const focusout$ = pzmTypedFromEvent(windowRef, `focusout`);
            const focusin$ = pzmTypedFromEvent(windowRef, `focusin`);
            const blur$ = pzmTypedFromEvent(windowRef, `blur`);
            const mousedown$ = pzmTypedFromEvent(windowRef, `mousedown`);
            const mouseup$ = pzmTypedFromEvent(windowRef, `mouseup`);

            return merge(
                focusout$.pipe(
                    takeUntil(mousedown$),
                    repeatWhen(() => mouseup$),
                    withLatestFrom(removedElement$),
                    filter(([event, removedElement]) =>
                        isValidFocusout(pzmGetActualTarget(event), removedElement as Element),
                    ),
                    map(([{relatedTarget}]) => relatedTarget),
                ),
                blur$.pipe(
                    map(() => documentRef.activeElement),
                    filter(element => !!element && element.matches(`iframe`)),
                ),
                focusin$.pipe(
                    switchMap(event => {
                        const target = pzmGetActualTarget(event);
                        const root = pzmGetDocumentOrShadowRoot(target) as Document;

                        return root === documentRef
                            ? of(target)
                            : shadowRootActiveElement(root).pipe(startWith(target));
                    }),
                ),
                mousedown$.pipe(
                    switchMap(event =>
                        !documentRef.activeElement ||
                        documentRef.activeElement === documentRef.body
                            ? of(pzmGetActualTarget(event))
                            : focusout$.pipe(
                                  take(1),
                                  mapTo(pzmGetActualTarget(event)),
                                  takeUntil(timer(0)),
                              ),
                    ),
                ),
            ).pipe(distinctUntilChanged(), share());
        },
    },
);

// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target: any, removedElement: Element | null = null): boolean {
    return (
        // Not due to switching tabs/going to DevTools
        pzmGetDocumentOrShadowRoot(target).activeElement !== target &&
        // Not due to button/input becoming disabled
        !target.disabled &&
        // Not due to element being removed from DOM
        (!removedElement || !removedElement.contains(target))
    );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        pzmTypedFromEvent(root, `focusin`).pipe(map(({target}) => target)),
        pzmTypedFromEvent(root, `focusout`).pipe(
            filter(
                ({target, relatedTarget}) => !!relatedTarget && isValidFocusout(target),
            ),
            map(({relatedTarget}) => relatedTarget),
        ),
    );
}
function PZM_REMOVED_ELEMENT(PZM_REMOVED_ELEMENT: any): never {
    throw new Error('Function not implemented.');
}

