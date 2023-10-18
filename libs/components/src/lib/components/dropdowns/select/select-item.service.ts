import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class PrizmSelectItemService<T = any> {
  private readonly selected$$ = new ReplaySubject<T>(1);

  private selected_: T | null = null;

  public readonly selected$ = this.selected$$.asObservable();

  get selected() {
    return this.selected_;
  }

  public select(item: T): void {
    if (this.selected_ === item) return;
    this.selected$$.next((this.selected_ = item));
  }
}
