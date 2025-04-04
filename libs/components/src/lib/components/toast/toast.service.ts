import { inject, Inject, Injectable, OnDestroy } from '@angular/core';
import { PolymorphContent } from '../../directives/polymorph';
import { PRIZM_TOAST_ID, PrizmToastOptions } from './types';
import { PrizmToastRef } from './toast-ref';
import { generateToastId } from './util';
import { PRIZM_TOAST_OPTIONS, PrizmToastDefaultOptions } from './toast-options';
import { PrizmToastExistException } from '../../exceptions/toast-exist.exception';
import { Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PrizmToastNotExistException } from '../../exceptions/toast-not-exist.exception';
import { PrizmToastControl } from './toast-control';

/** Карта хранения ссылок на тосты по их идентификаторам */
export type ToastRefMap = Map<PRIZM_TOAST_ID, PrizmToastRef>;

/**
 * Сервис для управления отображением тостов.
 * Обеспечивает создание, обновление и удаление тостов,
 * а также уведомление об изменениях в наборе активных тостов.
 */
@Injectable({
  providedIn: 'root',
})
export class PrizmToastService implements OnDestroy {
  /** Основное хранилище для управления тостами */
  private readonly toastRefs: ToastRefMap = new Map();
  /** Контроллер тостов, внедрённый через Angular DI */
  private readonly toastControl = inject(PrizmToastControl);

  /** Источник уведомлений об изменениях */
  private readonly changesSource$ = new Subject<void>();
  /** Наблюдаемый поток, который эмитирует отсортированный список активных тостов */
  readonly changes$ = this.changesSource$.pipe(
    map(() => [...this.toastRefs.values()].sort((a, b) => (b?.weight ?? 0) - (a?.weight ?? 0))),
    shareReplay(1)
  );

  /** Поток уничтожения для завершения подписок */
  readonly destroy$ = new Subject<void>();

  constructor(@Inject(PRIZM_TOAST_OPTIONS) private readonly options: PrizmToastDefaultOptions) {
    // Инициализируем оверлеи через контроллер
    this.toastControl.initializeOverlays(this);
  }

  /** Геттер для получения количества активных тостов */
  get size(): number {
    return this.toastRefs.size;
  }

  /**
   * Создаёт новый тост.
   * @param content - Контент тоста.
   * @param options - Дополнительные параметры тоста.
   * @returns Ссылка на созданный тост.
   * @throws PrizmToastExistException, если тост с таким id уже существует.
   */
  public create(content: PolymorphContent, options: PrizmToastOptions = {}): PrizmToastRef {
    const id = options.id || generateToastId();
    if (this.toastRefs.has(id)) {
      throw new PrizmToastExistException(id);
    }
    const ref = new PrizmToastRef(
      content,
      options.weight ?? 0,
      options.timer ?? this.options.timer,
      options.title ?? this.options.title,
      options.data ?? this.options.data,
      options.position ?? this.options.position,
      id,
      options.appearance ?? this.options.appearance,
      this.options,
      this,
      options.show,
      options.isPlatform ?? this.options.isPlatform
    );

    this.toastRefs.set(id, ref);
    this.notifyChanges();
    return ref;
  }

  /**
   * @deprecated use notifyChanges
   * Метод detect оставлен для сохранения прежнего контракта.
   * Он делегирует вызов метода notifyChanges для уведомления всех подписчиков.
   */
  public detect(): void {
    this.notifyChanges();
  }

  /**
   * Уведомляет всех подписчиков об изменениях в состоянии тостов.
   * Переименовано с 'detect' для лучшей читаемости.
   */
  public notifyChanges(): void {
    this.changesSource$.next();
  }

  /**
   * Вспомогательный метод для получения ссылки на тост по идентификатору.
   * @param id - Идентификатор тоста.
   * @returns Ссылка на тост.
   * @throws PrizmToastNotExistException, если тост не найден.
   */
  private getToastRef(id: PRIZM_TOAST_ID): PrizmToastRef {
    const ref = this.toastRefs.get(id);
    if (!ref) {
      throw new PrizmToastNotExistException(id);
    }
    return ref;
  }

  /**
   * Обновляет контент существующего тоста.
   * @param id - Идентификатор тоста.
   * @param content - Новый контент тоста.
   */
  public updateContent(id: PRIZM_TOAST_ID, content: PolymorphContent): void {
    const ref = this.getToastRef(id);
    ref.updateContent(content);
  }

  /**
   * Обновляет заголовок существующего тоста.
   * @param id - Идентификатор тоста.
   * @param title - Новый заголовок тоста.
   * @returns Ссылка на обновлённый тост.
   */
  public updateTitle(id: PRIZM_TOAST_ID, title: PrizmToastOptions['title']): PrizmToastRef {
    const ref = this.getToastRef(id);
    ref.updateTitle(title);
    return ref;
  }

  /**
   * Удаляет тост по заданному идентификатору.
   * @param id - Идентификатор тоста.
   * @throws PrizmToastNotExistException, если тост не найден.
   */
  public delete(id: PRIZM_TOAST_ID): void {
    const ref = this.getToastRef(id);
    ref.destroy();
    this.toastRefs.delete(id);
    this.notifyChanges();
  }

  /**
   * Удаляет все тосты.
   * Оптимизировано для вызова одного уведомления об изменениях вместо множественных уведомлений.
   */
  public deleteAll(): void {
    // Удаляем все тосты без уведомления на каждое удаление
    this.toastRefs.forEach(ref => {
      ref.destroy();
    });
    this.toastRefs.clear();
    this.notifyChanges();
  }

  /**
   * Lifecycle hook Angular для очистки ресурсов при уничтожении сервиса.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
