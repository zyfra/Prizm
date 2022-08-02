import { Injectable, Injector, Type } from '@angular/core';
import { noop, Observable, Observer, Subject } from 'rxjs';
import { ZuiBaseDialogContext, ZuiDialogBaseOptions } from '../components/dialogs/dialog/dialog.models';
import { PolymorphContent, ZuiOverscrollService } from '../directives';
import {
  ZUI_OVERLAY_BACKDROP_NO_POINTERS,
  ZuiOverlayControl,
  ZuiOverlayGlobalPosition,
  ZuiOverlayInsidePlacement,
  ZuiOverlayService,
} from '../modules/overlay';
import { finalize, takeUntil } from 'rxjs/operators';
import { ZuiOverscrollMode } from '../directives/overscroll/overscroll.model';

@Injectable()
export abstract class AbstractZuiDialogService<T extends ZuiDialogBaseOptions, O = unknown, DATA = unknown> {
  protected abstract readonly component: Type<unknown>;
  protected abstract readonly defaultOptions: T;
  protected readonly overlayService: ZuiOverlayService;
  protected readonly overscrollService: ZuiOverscrollService
  protected constructor(
    injector: Injector
  ) {
    this.overlayService = injector.get(ZuiOverlayService);
    this.overscrollService = injector.get(ZuiOverscrollService);
  }

  public open<O = unknown, DATA = unknown>(
    content: PolymorphContent<ZuiBaseDialogContext<O>> | unknown,
    options: Partial<T> = {},
    cb: (data: {
      control: ZuiOverlayControl,
      dialog: ZuiBaseDialogContext<any, any>,
      observer: Observer<O>,
      destroy$: Observable<void>,
    }) => void = noop,
  ): Observable<O> {
    const destroy$ = new Subject<void>()
    return new Observable(observer => {
      const completeWith = (result: O): void => {
        observer.next(result);
        observer.complete();
      };

      const dialog = {
        ...this.defaultOptions,
        ...(options),
        content,
        component: this.component,
        completeWith,
        $implicit: observer,
        createdAt: Date.now(),
        // TODO #mz replace after merge to next another branch - generate by uuid
        id: options.id ?? this.defaultOptions.id ?? ('id_' + Math.random()),
      };

      const control = this.overlayService
        .position(new ZuiOverlayGlobalPosition(
          {
            placement: dialog.position ?? ZuiOverlayInsidePlacement.CENTER,
            width: dialog.width ?? 'auto',
            height: dialog.height ?? 'auto'
          }
        ))
        .config({
          backdrop: dialog.backdrop ?? true,
          backdropClass: dialog.backdrop && ZUI_OVERLAY_BACKDROP_NO_POINTERS
        })
        .content(dialog.component, {
          context: dialog
        })
        .create();

      control.open();

      this.setOverscrollMode(
        options.overscroll ?? 'scroll',
        control,
        destroy$
      );

      if (typeof cb === 'function') {
        cb({control, dialog, observer, destroy$: destroy$.asObservable()});
      }


      return (): void => {
        control.close();
        destroy$.next();
        destroy$.complete();
      };
    })
  }

  private setOverscrollMode(
    mode: ZuiOverscrollMode,
    control: ZuiOverlayControl,
    destroy$: Observable<void>
  ): void {
    control.viewEl.style.pointerEvents = 'unset';
    this.overscrollService.run(
      mode,
      control.viewEl,
    ).pipe(
      takeUntil(destroy$)
    ).subscribe();
  }
}
