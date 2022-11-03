import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PrizmDestroyCallback } from './models';

/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
@Injectable()
export class PrizmDestroyService extends ReplaySubject<void> implements OnDestroy {
    private readonly cb = new Set<PrizmDestroyCallback>();
    constructor() {
      super(1);
    }

    ngOnDestroy(): void {
      this.next();
      this.complete();
      this.cb.forEach(
        (cb: PrizmDestroyCallback) => cb()
      );
      this.cb.clear();
    }

    public addCallback(cb: () => void): void {
      this.cb.add(cb);
    }
}
