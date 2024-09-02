import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[prizmStoreByIndex]',
  standalone: true,
  providers: [], // Регистрируем сервис на уровне директивы
})
export class PrizmStoreByIndexDirective<T> implements OnDestroy {
  private readonly map = new Map<number, T>();

  public delete(idx: number) {
    this.map.delete(idx);
  }

  public entries() {
    return this.map.entries();
  }

  public get(idx: number) {
    return this.map.get(idx);
  }

  public set(idx: number, item: T) {
    this.map.set(idx, item);
  }

  public ngOnDestroy(): void {
    this.map.clear();
  }
}
