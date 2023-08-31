import { Observable, Subject } from 'rxjs';
import { PrizmToastOptions, PrizmToastPosition } from './types';
import { finalize, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { PrizmToastRef } from './toast-ref';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { Injectable, Injector } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
  PrizmOverlayService,
} from '../../modules/overlay';
import { PrizmToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class PrizmToastControl {
  readonly destroy$ = new Subject<void>();
  constructor(
    private readonly overlayService: PrizmOverlayService,
    private readonly toastService: PrizmToastService,
    private readonly injector: Injector
  ) {
    this.init(PrizmToastPosition.TOP_RIGHT);
    this.init(PrizmToastPosition.TOP_LEFT);
    this.init(PrizmToastPosition.TOP_MIDDLE);
    this.init(PrizmToastPosition.BOTTOM_RIGHT);
    this.init(PrizmToastPosition.BOTTOM_LEFT);
    this.init(PrizmToastPosition.BOTTOM_MIDDLE);
  }

  private create(
    changesForThisPosition$: Observable<PrizmToastRef[]>,
    position: PrizmToastOptions['position']
  ): PrizmOverlayControl | void {
    const placement = this.getOverlayPosition(position);
    if (!placement) return;
    const overlayPosition = new PrizmOverlayGlobalPosition({
      placement,
      width: 'auto',
      height: 'auto',
    });

    const control = this.overlayService
      .position(overlayPosition)
      .content(PrizmToastContainerComponent, {
        refs$: changesForThisPosition$,
        position: position,
      })
      .create({ parentInjector: this.injector });

    return control;
  }

  private getOverlayPosition(position: PrizmToastOptions['position']): PrizmOverlayInsidePlacement | void {
    switch (position) {
      case PrizmToastPosition.BOTTOM_LEFT:
        return PrizmOverlayInsidePlacement.BOTTOM_LEFT;
      case PrizmToastPosition.BOTTOM_RIGHT:
        return PrizmOverlayInsidePlacement.BOTTOM_RIGHT;
      case PrizmToastPosition.BOTTOM_MIDDLE:
        return PrizmOverlayInsidePlacement.BOTTOM;
      case PrizmToastPosition.TOP_LEFT:
        return PrizmOverlayInsidePlacement.TOP_LEFT;
      case PrizmToastPosition.TOP_RIGHT:
        return PrizmOverlayInsidePlacement.TOP_RIGHT;
      case PrizmToastPosition.TOP_MIDDLE:
        return PrizmOverlayInsidePlacement.TOP;
    }
  }

  public init(position: PrizmToastOptions['position']): void {
    const changesForThisPosition$ = this.toastService.changes$.pipe(
      map(items => items.filter(item => item.position === position && item.show)),
      shareReplay(1)
    );
    const control = this.create(changesForThisPosition$, position);
    if (!control) return;

    changesForThisPosition$
      .pipe(
        tap(refs => {
          if (!refs.length) return this.close(control);
          this.open(control);
        }),
        finalize(() => this.destroy(control)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private destroy(control: PrizmOverlayControl | null): void {
    this.close(control);
    control = null;
  }

  private close(control: PrizmOverlayControl | null): void {
    control?.close();
  }

  private open(control: PrizmOverlayControl | null): void {
    control?.open();
  }
}
