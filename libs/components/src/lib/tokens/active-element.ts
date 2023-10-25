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
import { prizmTypedFromEvent } from '../observables/typed-from-event';
import { prizmGetActualTarget } from '../util/dom/get-actual-target';
import { prizmGetDocumentOrShadowRoot } from '../util/dom/prizm-get-document-or-shadow-root';

export const PRIZM_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>(
  `Active element on the document for ActiveZone`,
  {
    factory: (): Observable<unknown> => {
      const removedElement$ = inject(PRIZM_REMOVED_ELEMENT);
      const windowRef = inject(WINDOW);
      const documentRef = inject(DOCUMENT);
      const focusout$ = prizmTypedFromEvent(windowRef, `focusout`);
      const focusin$ = prizmTypedFromEvent(windowRef, `focusin`);
      const blur$ = prizmTypedFromEvent(windowRef, `blur`);
      const mousedown$ = prizmTypedFromEvent(windowRef, `mousedown`);
      const mouseup$ = prizmTypedFromEvent(windowRef, `mouseup`);

      return merge(
        focusout$.pipe(
          takeUntil(mousedown$),
          repeatWhen(() => mouseup$),
          withLatestFrom(removedElement$),
          filter(([event, removedElement]) =>
            isValidFocusout(prizmGetActualTarget(event), removedElement as Element)
          ),
          map(([{ relatedTarget }]) => relatedTarget)
        ),
        blur$.pipe(
          map(() => documentRef.activeElement),
          filter(element => !!element && element.matches(`iframe`))
        ),
        focusin$.pipe(
          switchMap(event => {
            const target = prizmGetActualTarget(event);
            const root = prizmGetDocumentOrShadowRoot(target) as Document;

            return root === documentRef ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
          })
        ),
        mousedown$.pipe(
          switchMap(event =>
            !documentRef.activeElement || documentRef.activeElement === documentRef.body
              ? of(prizmGetActualTarget(event))
              : focusout$.pipe(take(1), mapTo(prizmGetActualTarget(event)), takeUntil(timer(0)))
          )
        )
      ).pipe(distinctUntilChanged(), share());
    },
  }
);

// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target: unknown, removedElement: Element | null = null): boolean {
  return (
    // Not due to switching tabs/going to DevTools
    prizmGetDocumentOrShadowRoot(target).activeElement !== target &&
    // Not due to button/input becoming disabled
    !target.disabled &&
    // Not due to element being removed from DOM
    (!removedElement || !removedElement.contains(target))
  );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
  return merge(
    prizmTypedFromEvent(root, `focusin`).pipe(map(({ target }) => target)),
    prizmTypedFromEvent(root, `focusout`).pipe(
      filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)),
      map(({ relatedTarget }) => relatedTarget)
    )
  );
}
function PRIZM_REMOVED_ELEMENT(PRIZM_REMOVED_ELEMENT: unknown): never {
  throw new Error('Function not implemented.');
}
