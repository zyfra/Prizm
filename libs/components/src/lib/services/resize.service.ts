import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import {
  RESIZE_OBSERVER_SUPPORT,
  RESIZE_OPTION_BOX,
  ResizeObserverService,
} from '@ng-web-apis/resize-observer';
import { Observable } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  mapTo,
  takeUntil,
  throttleTime,
} from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmZoneFree } from '../observables/zone-free';
import { PRIZM_POLLING_TIME } from '../constants/polling-time';

import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

@Injectable()
export class PrizmResizeService extends ResizeObserverService {
  constructor(
    @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
    @Inject(NgZone) ngZone: NgZone,
    @Inject(PrizmDestroyService) destroy$: Observable<void>,
    @Inject(RESIZE_OBSERVER_SUPPORT) support: boolean,
    @Inject(RESIZE_OPTION_BOX) box: ResizeObserverBoxOptions,
    @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>
  ) {
    super(elementRef, ngZone, support, box);

    return this.pipe(
      catchError(() =>
        animationFrame$.pipe(
          throttleTime(PRIZM_POLLING_TIME),
          map(() => `${elementRef.nativeElement.clientWidth} ${elementRef.nativeElement.clientHeight}`),
          distinctUntilChanged(),
          mapTo(PRIZM_EMPTY_ARRAY)
        )
      ),
      debounceTime(0),
      prizmZoneFree(ngZone),
      takeUntil(destroy$)
    );
  }
}
