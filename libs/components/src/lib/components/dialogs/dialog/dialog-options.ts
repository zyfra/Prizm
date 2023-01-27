import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { merge, Observable, Subject } from 'rxjs';
import { WINDOW } from '@ng-web-apis/common';
import { DOCUMENT } from '@angular/common';
import { prizmTypedFromEvent } from '../../../observables';
import { prizmContainsOrAfter, prizmIsCurrentTarget } from '../../../util/dom';
import { filter, switchMapTo, take, takeUntil } from 'rxjs/operators';
import { PrizmOverlayContentToken } from '../../../modules/overlay';
import { PrizmOverlayContent } from '../../../modules/overlay/models';

export const PRIZM_DIALOGS_CLOSE = new InjectionToken<Observable<void>>('Default close event', {
  factory: (): Observable<void> => new Subject<void>().asObservable(),
});

const SCROLLBAR_PLACEHOLDER = 17;

export const PRIZM_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>('Dialogs closing stream');
export const PRIZM_DIALOG_PROVIDERS: Provider[] = [
  PrizmDestroyService,
  {
    provide: PRIZM_DIALOG_CLOSE_STREAM,
    deps: [DOCUMENT, WINDOW, ElementRef, PRIZM_DIALOGS_CLOSE, PrizmDestroyService, PrizmOverlayContentToken],
    useFactory: prizmDialogCloseStreamFactory,
  },
];

export function prizmDialogCloseStreamFactory(
  documentRef: Document,
  windowRef: Window,
  { nativeElement }: ElementRef<HTMLElement>,
  close$: Observable<void>,
  destroy$: PrizmDestroyService,
  content: PrizmOverlayContent
): Observable<unknown> {
  const { dismissible } = content.props.context;
  return dismissible
    ? merge(
        /* on click esc */
        prizmTypedFromEvent(documentRef, 'keydown').pipe(
          filter(
            ({ key, target }) =>
              key === 'Escape' &&
              target instanceof Element &&
              (!prizmContainsOrAfter(nativeElement, target) || nativeElement.contains(target))
          )
        ),
        /* on backdrop click*/
        prizmTypedFromEvent(nativeElement, 'click').pipe(filter(prizmIsCurrentTarget)),
        /* on outdoor mouse events */
        prizmTypedFromEvent(documentRef, 'mousedown').pipe(
          filter(
            ({ target, clientX }) =>
              target instanceof Element &&
              windowRef.innerWidth - clientX > SCROLLBAR_PLACEHOLDER &&
              !prizmContainsOrAfter(nativeElement, target)
          ),
          switchMapTo(
            prizmTypedFromEvent(documentRef, 'mouseup').pipe(
              take(1),
              filter(
                ({ target }) => target instanceof Element && !prizmContainsOrAfter(nativeElement, target)
              )
            )
          )
        ),
        /* on custom close event */
        close$
      ).pipe(takeUntil(destroy$))
    : close$;
}
