import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { merge, Observable, Subject } from 'rxjs';
import { WINDOW } from '@ng-web-apis/common';
import { DOCUMENT } from '@angular/common';
import { pzmTypedFromEvent } from '../../../observables';
import { pzmContainsOrAfter, pzmIsCurrentTarget } from '../../../util/dom';
import { filter, switchMapTo, take, takeUntil } from 'rxjs/operators';
import { PzmOverlayContentToken } from '../../../modules/overlay';
import { PzmOverlayContent } from '../../../modules/overlay/models';

export const PZM_DIALOGS_CLOSE = new InjectionToken<Observable<void>>(
    'Default close event',
    {
        factory: (): Observable<void> => new Subject<void>().asObservable(),
    },
);

const SCROLLBAR_PLACEHOLDER = 17;

export const PZM_DIALOG_CLOSE_STREAM = new InjectionToken<Observable<unknown>>(
  'Dialogs closing stream',
);
export const PZM_DIALOG_PROVIDERS: Provider[] = [
  PzmDestroyService,
  {
    provide: PZM_DIALOG_CLOSE_STREAM,
    deps: [
      DOCUMENT,
      WINDOW,
      ElementRef,
      PZM_DIALOGS_CLOSE,
      PzmDestroyService,
      PzmOverlayContentToken
    ],
    useFactory: pzmDialogCloseStreamFactory,
  },
];

export function pzmDialogCloseStreamFactory(
  documentRef: Document,
  windowRef: Window,
  {nativeElement}: ElementRef<HTMLElement>,
  close$: Observable<void>,
  destroy$: PzmDestroyService,
  content: PzmOverlayContent,
): Observable<unknown> {
  const {dismissible} = content.props.context;
  return dismissible
    ? merge(
      /* on click esc */
      pzmTypedFromEvent(documentRef, 'keydown').pipe(
        filter(
          ({key, target}) =>
            key === 'Escape' &&
            target instanceof Element &&
            (!pzmContainsOrAfter(nativeElement, target) ||
              nativeElement.contains(target)),
        ),
      ),
      /* on backdrop click*/
      pzmTypedFromEvent(nativeElement, 'click').pipe(filter(pzmIsCurrentTarget)),
      /* on outdoor mouse events */
      pzmTypedFromEvent(documentRef, 'mousedown').pipe(
        filter(
          ({target, clientX}) =>
            target instanceof Element &&
            windowRef.innerWidth - clientX > SCROLLBAR_PLACEHOLDER &&
            !pzmContainsOrAfter(nativeElement, target),
        ),
        switchMapTo(
          pzmTypedFromEvent(documentRef, 'mouseup').pipe(
            take(1),
            filter(
              ({target}) =>
                target instanceof Element &&
                !pzmContainsOrAfter(nativeElement, target),
            ),
          ),
        ),
      ),
      /* on custom close event */
      close$,
    ).pipe(takeUntil(destroy$))
    : close$;
}
