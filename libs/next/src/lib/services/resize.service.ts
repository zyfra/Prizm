import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { RESIZE_OBSERVER_SUPPORT, RESIZE_OPTION_BOX, ResizeObserverService } from '@ng-web-apis/resize-observer';
import { Observable } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, mapTo, takeUntil, throttleTime } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmZoneFree } from '../observables/zone-free';
import { ZUI_EMPTY_ARRAY } from '../constants/empty';
import { ZUI_POLLING_TIME } from '../constants/polling-time';

@Injectable()
export class ZuiResizeService extends ResizeObserverService {
    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(PzmDestroyService) destroy$: Observable<void>,
        @Inject(RESIZE_OBSERVER_SUPPORT) support: boolean,
        @Inject(RESIZE_OPTION_BOX) box: ResizeObserverBoxOptions,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        super(elementRef, ngZone, support, box);

        return this.pipe(
            catchError(() =>
                animationFrame$.pipe(
                    throttleTime(ZUI_POLLING_TIME),
                    map(
                        () =>
                            `${elementRef.nativeElement.clientWidth} ${elementRef.nativeElement.clientHeight}`,
                    ),
                    distinctUntilChanged(),
                    mapTo(ZUI_EMPTY_ARRAY),
                ),
            ),
            debounceTime(0),
            pzmZoneFree(ngZone),
            takeUntil(destroy$),
        );
    }
}
