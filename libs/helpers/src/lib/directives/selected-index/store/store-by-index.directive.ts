import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[prizmStoreByIndex]',
  standalone: true,
  providers: [], // Регистрируем сервис на уровне директивы
})
export class PrizmStoreByIndexDirective<T> implements OnDestroy {
  protected readonly store = new Map<number, T>();

  public delete(idx: number) {
    this.store.delete(idx);
  }

  public get(idx: number) {
    return this.store.get(idx);
  }

  public set(idx: number, item: T) {
    this.store.set(idx, item);
  }

  public ngOnDestroy(): void {
    this.store.clear();
  }
}
