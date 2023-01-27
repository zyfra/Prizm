import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmLetContextService<T> implements OnDestroy {
  private readonly context$$ = new BehaviorSubject<T | null>(null);
  get context(): T | null {
    return this.context$$.value;
  }
  public setContext(newContext: T): void {
    this.context$$.next(newContext);
  }

  public ngOnDestroy(): void {
    this.context$$.complete();
    this.context$$.unsubscribe();
  }
}
