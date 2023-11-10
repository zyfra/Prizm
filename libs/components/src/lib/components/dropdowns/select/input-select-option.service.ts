import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmInputSelectOptionService<T = any> {
  private readonly selected$$ = new BehaviorSubject<T | null>(null);
  public readonly selected$ = this.selected$$.asObservable();

  public selected(value: T): void {
    this.selected$$.next(value);
  }
}
