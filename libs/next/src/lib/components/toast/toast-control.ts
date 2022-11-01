import { Observable, Subject } from 'rxjs';
import { PzmToastOptions, PzmToastPosition } from './types';
import { finalize, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { PzmToastRef } from './toast-ref';
import { PzmToastContainerComponent } from './toast-container/toast-container.component';
import { Injectable, Injector } from '@angular/core';
import {
  PzmOverlayControl,
  PzmOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService,
} from '../../modules/overlay';
import { PzmToastService } from './toast.service';

@Injectable()
export class PzmToastControl {
  readonly destroy$ = new Subject<void>()
  constructor(
    private readonly overlayService: PzmOverlayService,
    private readonly toastService: PzmToastService,
    private readonly injector: Injector,
  ) {}

  private create(
    changesForThisPosition$:  Observable<PzmToastRef[]>,
    position: PzmToastOptions['position']
  ): PzmOverlayControl | void {
    const placement = this.getOverlayPosition(position);
    if (!placement) return;
    const overlayPosition = new PzmOverlayGlobalPosition({
      placement,
      width: 'auto',
      height: 'auto',
    });

    const control = this.overlayService
      .position(overlayPosition)
      .content(PzmToastContainerComponent, {
        refs$: changesForThisPosition$,
        position: position
      })
      .create({parentInjector: this.injector});

    return control;
  }

  private getOverlayPosition(
    position: PzmToastOptions['position']
  ): PzmOverlayInsidePlacement | void {
    switch (position) {
      case PzmToastPosition.BOTTOM_LEFT:
        return PzmOverlayInsidePlacement.BOTTOM_LEFT;
      case PzmToastPosition.BOTTOM_RIGHT:
        return PzmOverlayInsidePlacement.BOTTOM_RIGHT;
      case PzmToastPosition.BOTTOM_MIDDLE:
        return PzmOverlayInsidePlacement.BOTTOM;
      case PzmToastPosition.TOP_LEFT:
        return PzmOverlayInsidePlacement.TOP_LEFT;
      case PzmToastPosition.TOP_RIGHT:
        return PzmOverlayInsidePlacement.TOP_RIGHT;
      case PzmToastPosition.TOP_MIDDLE:
        return PzmOverlayInsidePlacement.TOP;
    }
  }

  public init(
    position: PzmToastOptions['position']
  ): void {
    const changesForThisPosition$ = this.toastService.changes$.pipe(
        map(items => items.filter(item => item.position === position && item.show)),
        shareReplay(1),
    );
    const control = this.create(changesForThisPosition$, position);
    if (!control) return;

    changesForThisPosition$.pipe(
      tap(
        (refs) => {
          if (!refs.length) return this.close(control);
          this.open(control);
        }
      ),
      finalize(() => this.destroy(control)),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  private destroy(control: PzmOverlayControl): void {
    this.close(control);
    control = null;
  }

  private close(control: PzmOverlayControl): void {
    control?.close();
  }

  private open(control: PzmOverlayControl): void {
    control?.open();
  }
}
