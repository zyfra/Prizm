import { Injectable } from '@angular/core';
import { PrizmStickyDirective } from './sticky.directive';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmStickyRelativeService {
  element!: HTMLElement;
  public readonly set = new Set<PrizmStickyDirective>();
  public readonly changesChildren$$ = new BehaviorSubject<PrizmStickyDirective[]>([]);
  public readonly changesChildren$ = this.changesChildren$$.asObservable();

  public add(item: PrizmStickyDirective) {
    this.set.add(item);
    this.changesChildren$$.next([...this.set]);
  }

  public delete(item: PrizmStickyDirective) {
    this.set.delete(item);
    this.changesChildren$$.next([...this.set]);
  }
}
