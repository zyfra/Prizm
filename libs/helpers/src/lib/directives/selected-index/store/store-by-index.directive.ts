import { Directive, inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[prizmStoreByIndex]',
  standalone: true,
  providers: [], // Регистрируем сервис на уровне директивы
})
export class PrizmStoreByIndexDirective<T> implements OnDestroy {
  private readonly map = new Map<number, T>();
  private readonly changes$$ = new Subject<void>();
  public readonly changes$ = this.changes$$.asObservable();

  public delete(idx: number) {
    this.map.delete(idx);
    this.changes$$.next();
  }

  public entries() {
    return this.map.entries();
  }

  public get(idx: number) {
    return this.map.get(idx);
  }

  public set(idx: number, item: T) {
    this.map.set(idx, item);
    this.changes$$.next();
  }

  public ngOnDestroy(): void {
    this.map.clear();
  }
}
