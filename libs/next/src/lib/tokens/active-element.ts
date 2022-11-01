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
import { zuiGetActualTarget } from '../util/dom/get-actual-target';
import { zuiGetDocumentOrShadowRoot } from '../util/dom/zui-get-document-or-shadow-root';


export const ZUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
    `Active element on the document for ActiveZone`,
    {
        factory: (): Observable<any> => {
            const removedElement$ = inject(ZUI_REMOVED_ELEMENT);
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
                        isValidFocusout(zuiGetActualTarget(event), removedElement as Element),
                    ),
                    map(([{relatedTarget}]) => relatedTarget),
                ),
                blur$.pipe(
                    map(() => documentRef.activeElement),
                    filter(element => !!element && element.matches(`iframe`)),
                ),
                focusin$.pipe(
                    switchMap(event => {
                        const target = zuiGetActualTarget(event);
                        const root = zuiGetDocumentOrShadowRoot(target) as Document;

                        return root === documentRef
                            ? of(target)
                            : shadowRootActiveElement(root).pipe(startWith(target));
                    }),
                ),
                mousedown$.pipe(
                    switchMap(event =>
                        !documentRef.activeElement ||
                        documentRef.activeElement === documentRef.body
                            ? of(zuiGetActualTarget(event))
                            : focusout$.pipe(
                                  take(1),
                                  mapTo(zuiGetActualTarget(event)),
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
        zuiGetDocumentOrShadowRoot(target).activeElement !== target &&
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
function ZUI_REMOVED_ELEMENT(ZUI_REMOVED_ELEMENT: any): never {
    throw new Error('Function not implemented.');
}

