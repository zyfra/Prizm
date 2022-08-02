import { Injectable, NgZone } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { filter, mapTo, switchMap, tap } from 'rxjs/operators';
import { zuiTypedFromEvent, zuiZoneFree } from '../../observables';
import { ZuiEventWith } from '../../types';
import { zuiCanScroll, zuiGetScrollParent } from '../../util/dom';
import { ZuiOverscrollMode } from './overscroll.model';

@Injectable({
    providedIn: 'root'
})
export class ZuiOverscrollService {
    constructor(
      private readonly ngZone: NgZone,
    ) {}

    public run(
      mode: ZuiOverscrollMode | '',
      nativeElement: HTMLElement,
    ): Observable<void> {
      return merge(
          zuiTypedFromEvent(nativeElement, 'wheel', {passive: false})
          .pipe(
            filter(() => this.isEnabled(mode)),
            zuiZoneFree(this.ngZone),
            tap(
              event => {
                this.processEvent(
                  mode,
                  event,
                  !!event.deltaY,
                  event.deltaY ? event.deltaY < 0 : event.deltaX < 0,
                );
              }
            )
          ),
          zuiTypedFromEvent(nativeElement, 'touchstart', {passive: true})
            .pipe(
              switchMap(({touches}: {touches: TouchList}) => {
                let {clientX, clientY} = touches[0];
                let deltaX = 0;
                let deltaY = 0;
                let vertical: boolean;

                return zuiTypedFromEvent(nativeElement, 'touchmove', {
                  passive: false,
                }).pipe(
                  filter(() => this.isEnabled(mode)),
                  tap(event => {
                    // We have to have it in tap instead of subscribe due to variables in closure
                    const changedTouch = event.changedTouches[0];

                    deltaX = clientX - changedTouch.clientX;
                    deltaY = clientY - changedTouch.clientY;
                    clientX = changedTouch.clientX;
                    clientY = changedTouch.clientY;

                    if (vertical === undefined) {
                      vertical = Math.abs(deltaY) > Math.abs(deltaX);
                    }

                    this.processEvent(
                      mode,
                      event,
                      vertical,
                      vertical ? deltaY < 0 : deltaX < 0,
                    );
                  }),
                );
              }),
              zuiZoneFree(this.ngZone),
          )
      ).pipe(
        mapTo(void 0)
      );
    }

    private isEnabled(mode: ZuiOverscrollMode | ''): boolean {
      return mode !== 'none'
    }

    private processEvent(
      mode: ZuiOverscrollMode | '',
      event: ZuiEventWith<Event, HTMLElement>,
      vertical: boolean,
      negative: boolean,
    ): void {
      const {target, currentTarget, cancelable} = event;

      if (
        !cancelable ||
        !(target instanceof Element) ||
        (target as HTMLInputElement)?.type === 'range'
      ) {
        return;
      }

      // This is all what's needed in Chrome/Firefox thanks to CSS overscroll-behavior
      if (
        mode === 'all' &&
        ((vertical && !currentTarget.contains(zuiGetScrollParent(target))) ||
          (!vertical && !currentTarget.contains(zuiGetScrollParent(target, false))))
      ) {
        event.preventDefault();

        return;
      }

      // This is Safari/IE/Edge fallback
      if (
        vertical &&
        ((negative && !zuiCanScroll(target, currentTarget, true, false)) ||
          (!negative && !zuiCanScroll(target, currentTarget, true, true)))
      ) {
        event.preventDefault();

        return;
      }

      if (
        !vertical &&
        ((negative && !zuiCanScroll(target, currentTarget, false, false)) ||
          (!negative && !zuiCanScroll(target, currentTarget, false, true)))
      ) {
        event.preventDefault();
      }
    }
}
