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
  /**
   * Subject для завершения подписок при смене состояния или уничтожении компонента.
   */
  readonly destroy$ = new Subject<void>();

  private toastService?: PrizmToastService;

  constructor(
    private readonly overlayService: PrizmOverlayService,
    private readonly injector: Injector
  ) {}

  /**
   * Инициализирует оверлеи для всех поддерживаемых позиций уведомлений.
   *
   * @param toastService Сервис, предоставляющий уведомления.
   */
  public initializeOverlays(toastService: PrizmToastService): void {
    this.toastService = toastService;

    // Завершаем все предыдущие подписки, чтобы избежать утечек памяти
    this.destroy$.next();

    // Инициализируем оверлеи для каждой позиции уведомлений
    this.initOverlayForPosition(PrizmToastPosition.TOP_RIGHT);
    this.initOverlayForPosition(PrizmToastPosition.TOP_LEFT);
    this.initOverlayForPosition(PrizmToastPosition.TOP_MIDDLE);
    this.initOverlayForPosition(PrizmToastPosition.BOTTOM_RIGHT);
    this.initOverlayForPosition(PrizmToastPosition.BOTTOM_LEFT);
    this.initOverlayForPosition(PrizmToastPosition.BOTTOM_MIDDLE);
  }

  /**
   * Создает контроллер оверлея для заданной позиции уведомления.
   *
   * @param changesForPosition$ Observable с уведомлениями для данной позиции.
   * @param position Позиция уведомления.
   * @returns Контроллер оверлея или undefined, если позиция не поддерживается.
   */
  private createOverlayControl(
    changesForPosition$: Observable<PrizmToastRef[]>,
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
        refs$: changesForPosition$,
        position: position,
      })
      .create({ parentInjector: this.injector });

    return control;
  }

  /**
   * Преобразует позицию уведомления в соответствующую позицию оверлея.
   *
   * @param position Позиция уведомления.
   * @returns Разметку расположения для оверлея или undefined, если позиция не поддерживается.
   */
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

  /**
   * Инициализирует оверлей для конкретной позиции уведомления.
   *
   * @param position Позиция уведомления.
   */
  public initOverlayForPosition(position: PrizmToastOptions['position']): void {
    if (!this.toastService) {
      throw new Error('Need pass toast service');
    }

    const changesForPosition$ = this.toastService.changes$.pipe(
      map(items => items.filter(item => item.position === position && item.show)),
      shareReplay(1)
    );

    const control = this.createOverlayControl(changesForPosition$, position);
    if (!control) return;

    changesForPosition$
      .pipe(
        tap(refs => {
          if (!refs.length) {
            return this.closeOverlay(control);
          }
          this.openOverlay(control);
        }),
        finalize(() => this.destroyOverlay(control)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * Закрывает и уничтожает заданный контроллер оверлея.
   *
   * @param control Контроллер оверлея, который необходимо уничтожить.
   */
  private destroyOverlay(control: PrizmOverlayControl | null): void {
    this.closeOverlay(control);
    control?.destroy();
    control = null;
  }

  /**
   * Закрывает оверлей, если контроллер существует.
   *
   * @param control Контроллер оверлея.
   */
  private closeOverlay(control: PrizmOverlayControl | null): void {
    control?.close();
  }

  /**
   * Открывает оверлей, если контроллер существует.
   *
   * @param control Контроллер оверлея.
   */
  private openOverlay(control: PrizmOverlayControl | null): void {
    control?.open();
  }
}
