import {Observable, Subject} from "rxjs";
import {ZuiToastOptions, ZuiToastPosition} from "./types";
import {finalize, map, shareReplay, takeUntil, tap} from "rxjs/operators";
import {ZuiToastRef} from "./toast-ref";
import {ZuiToastContainerComponent} from "./toast-container/toast-container.component";
import {Injectable, Injector} from "@angular/core";
import {ZuiOverlayControl, ZuiOverlayGlobalPosition, ZuiOverlayInsidePlacement, ZuiOverlayService} from "../../modules/overlay";
import {ZuiToastService} from "./toast.service";

@Injectable()
export class ZuiToastControl {
  readonly destroy$ = new Subject<void>()
  constructor(
    private readonly overlayService: ZuiOverlayService,
    private readonly toastService: ZuiToastService,
    private readonly injector: Injector,
  ) {}

  private create(
    changesForThisPosition$:  Observable<ZuiToastRef[]>,
    position: ZuiToastOptions['position']
  ): ZuiOverlayControl | void {
    const placement = this.getOverlayPosition(position);
    if (!placement) return;
    const overlayPosition = new ZuiOverlayGlobalPosition({
      placement,
      width: 'auto',
      height: 'auto',
    });

    const control = this.overlayService
      .position(overlayPosition)
      .content(ZuiToastContainerComponent, {
        refs$: changesForThisPosition$,
        position: position
      })
      .create({parentInjector: this.injector});

    return control;
  }

  private getOverlayPosition(
    position: ZuiToastOptions['position']
  ): ZuiOverlayInsidePlacement | void {
    switch (position) {
      case ZuiToastPosition.BOTTOM_LEFT:
        return ZuiOverlayInsidePlacement.BOTTOM_LEFT;
      case ZuiToastPosition.BOTTOM_RIGHT:
        return ZuiOverlayInsidePlacement.BOTTOM_RIGHT;
      case ZuiToastPosition.BOTTOM_MIDDLE:
        return ZuiOverlayInsidePlacement.BOTTOM;
      case ZuiToastPosition.TOP_LEFT:
        return ZuiOverlayInsidePlacement.TOP_LEFT;
      case ZuiToastPosition.TOP_RIGHT:
        return ZuiOverlayInsidePlacement.TOP_RIGHT;
      case ZuiToastPosition.TOP_MIDDLE:
        return ZuiOverlayInsidePlacement.TOP;
    }
  }

  public init(
    position: ZuiToastOptions['position']
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

  private destroy(control: ZuiOverlayControl): void {
    this.close(control);
    control = null;
  }

  private close(control: ZuiOverlayControl): void {
    control?.close();
  }

  private open(control: ZuiOverlayControl): void {
    control?.open();
  }
}
