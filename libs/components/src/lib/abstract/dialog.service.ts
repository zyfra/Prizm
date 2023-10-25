import { Injectable, Injector, Type } from '@angular/core';
import { noop, Observable, Observer, Subject } from 'rxjs';
import { PrizmBaseDialogContext, PrizmDialogBaseOptions } from '../components/dialogs/dialog/dialog.models';
import { PolymorphContent, PrizmOverscrollService } from '../directives';
import {
  PRIZM_OVERLAY_BACKDROP_NO_POINTERS,
  PrizmOverlayControl,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
  PrizmOverlayService,
  PrizmOverlaySlidePosition,
} from '../modules/overlay';
import { takeUntil } from 'rxjs/operators';
import { PrizmOverscrollMode } from '../directives/overscroll/overscroll.model';
import { PrizmOverlayConfig } from '../modules/overlay/models';
import { prizmGenerateId } from '@prizm-ui/helpers';

@Injectable()
export abstract class AbstractPrizmDialogService<
  T extends PrizmDialogBaseOptions,
  O = unknown,
  DATA = unknown
> {
  protected abstract readonly component: Type<unknown>;
  protected abstract readonly defaultOptions: T;
  protected readonly overlayService: PrizmOverlayService;
  protected readonly overscrollService: PrizmOverscrollService;
  protected constructor(injector: Injector) {
    this.overlayService = injector.get(PrizmOverlayService);
    this.overscrollService = injector.get(PrizmOverscrollService);
  }

  public open<O = unknown, DATA = unknown>(
    content: PolymorphContent<PrizmBaseDialogContext<O>> | unknown,
    options: Partial<T>,
    cb: (data: {
      control: PrizmOverlayControl;
      dialog: PrizmBaseDialogContext<unknown, unknown>;
      observer: Observer<O>;
      destroy$: Observable<void>;
    }) => void = noop
  ): Observable<O> {
    const destroy$ = new Subject<void>();
    return new Observable(observer => {
      const completeWith = (result: O): void => {
        observer.next(result);
        observer.complete();
      };

      options = options ?? {};

      const dialog = {
        ...this.defaultOptions,
        ...options,
        content,
        component: this.component,
        completeWith,
        $implicit: observer,
        createdAt: Date.now(),
        id: options.id ?? this.defaultOptions.id ?? prizmGenerateId(),
      };

      const control = this.overlayService
        .position(this.getPosition(dialog))
        .config(this.getConfig(dialog))
        .content(dialog.component, {
          context: dialog,
          getService: () => {
            return control;
          },
        })
        .parentContainer(options.parentContainer)
        .create();

      if (typeof options.zIndex === 'number') control.zIndex = options.zIndex;

      control.open();

      this.setOverscrollMode(options.overscroll ?? 'scroll', control, destroy$);

      if (typeof cb === 'function') {
        cb({ control, dialog, observer, destroy$: destroy$.asObservable() });
      }

      return (): void => {
        control.close();
        destroy$.next();
        destroy$.complete();
      };
    });
  }

  protected getConfig(dialog: PrizmBaseDialogContext<unknown, unknown>): Partial<PrizmOverlayConfig> {
    return {
      backdrop: dialog.backdrop ?? true,
      styleVars: dialog.styleVars,
      containerClass: dialog.containerClass ?? '',
      backdropClass: [dialog.backdrop && PRIZM_OVERLAY_BACKDROP_NO_POINTERS, dialog.backdropClass]
        .filter(Boolean)
        .join(' '),
      wrapperClass: dialog.wrapperClass,
    };
  }

  protected getPosition(
    dialog: PrizmBaseDialogContext<unknown, unknown>
  ): PrizmOverlayGlobalPosition | PrizmOverlaySlidePosition | PrizmOverlayGlobalPosition {
    return new PrizmOverlayGlobalPosition({
      placement: dialog.position ?? PrizmOverlayInsidePlacement.CENTER,
      width: dialog.width ?? 'auto',
      height: dialog.height ?? 'auto',
    });
  }

  private setOverscrollMode(
    mode: PrizmOverscrollMode,
    control: PrizmOverlayControl,
    destroy$: Observable<void>
  ): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    control.viewEl.style.pointerEvents = 'unset';
    this.overscrollService
      .run(mode, control.viewEl as unknown)
      .pipe(takeUntil(destroy$))
      .subscribe();
  }
}
