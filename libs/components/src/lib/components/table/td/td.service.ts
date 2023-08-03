import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmTdService {
  private readonly count$$ = new BehaviorSubject<number>(0);
  public readonly count$ = this.count$$.asObservable();
  get count() {
    return this.count$$.value;
  }

  public increment(value = 1) {
    this.count$$.next(this.count$$.value + value);
  }

  public decrement(value = 1) {
    this.count$$.next(this.count$$.value - value);
  }
}
