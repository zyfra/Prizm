import { Injectable, NgZone } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { filter, mapTo, switchMap, tap } from 'rxjs/operators';
import { prizmTypedFromEvent, prizmZoneFree } from '../../observables';
import { PrizmEventWith } from '../../types';
import { prizmCanScroll, prizmGetScrollParent } from '../../util/dom';
import { PrizmOverscrollMode } from './overscroll.model';

@Injectable({
  providedIn: 'root',
})
export class PrizmOverscrollService {
  constructor(private readonly ngZone: NgZone) {}

  public run(mode: PrizmOverscrollMode | '', nativeElement: HTMLElement): Observable<void> {
    return merge(
      prizmTypedFromEvent(nativeElement, 'wheel', { passive: false }).pipe(
        filter(() => this.isEnabled(mode)),
        prizmZoneFree(this.ngZone),
        tap(event => {
          this.processEvent(mode, event, !!event.deltaY, event.deltaY ? event.deltaY < 0 : event.deltaX < 0);
        })
      ),
      prizmTypedFromEvent(nativeElement, 'touchstart', { passive: true }).pipe(
        switchMap(({ touches }: { touches: TouchList }) => {
          let { clientX, clientY } = touches[0];
          let deltaX = 0;
          let deltaY = 0;
          let vertical: boolean;

          return prizmTypedFromEvent(nativeElement, 'touchmove', {
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

              this.processEvent(mode, event, vertical, vertical ? deltaY < 0 : deltaX < 0);
            })
          );
        }),
        prizmZoneFree(this.ngZone)
      )
    ).pipe(mapTo(void 0));
  }

  private isEnabled(mode: PrizmOverscrollMode | ''): boolean {
    return mode !== 'none';
  }

  private processEvent(
    mode: PrizmOverscrollMode | '',
    event: PrizmEventWith<Event, HTMLElement>,
    vertical: boolean,
    negative: boolean
  ): void {
    const { target, currentTarget, cancelable } = event;

    if (!cancelable || !(target instanceof Element) || (target as HTMLInputElement)?.type === 'range') {
      return;
    }

    // This is all what's needed in Chrome/Firefox thanks to CSS overscroll-behavior
    if (
      mode === 'all' &&
      ((vertical && !currentTarget.contains(prizmGetScrollParent(target))) ||
        (!vertical && !currentTarget.contains(prizmGetScrollParent(target, false))))
    ) {
      event.preventDefault();

      return;
    }

    // This is Safari/IE/Edge fallback
    if (
      vertical &&
      ((negative && !prizmCanScroll(target, currentTarget, true, false)) ||
        (!negative && !prizmCanScroll(target, currentTarget, true, true)))
    ) {
      event.preventDefault();

      return;
    }

    if (
      !vertical &&
      ((negative && !prizmCanScroll(target, currentTarget, false, false)) ||
        (!negative && !prizmCanScroll(target, currentTarget, false, true)))
    ) {
      event.preventDefault();
    }
  }
}
