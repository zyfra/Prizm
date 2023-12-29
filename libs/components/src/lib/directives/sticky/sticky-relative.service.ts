import { Injectable, OnDestroy } from '@angular/core';
import { PrizmStickyDirective } from './sticky.directive';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class PrizmStickyRelativeService implements OnDestroy {
  element!: HTMLElement;
  public readonly changesChildren$$ = new Subject<void>();

  private resizeObserver = new ResizeObserver(() => {
    this.changesChildren$$.next();
  });
  public readonly changesChildren$ = this.changesChildren$$.pipe(shareReplay(1));

  public add(item: PrizmStickyDirective) {
    this.resizeObserver.observe(item.elRef.nativeElement);
  }

  public delete(item: PrizmStickyDirective) {
    this.resizeObserver.unobserve(item.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }
}
