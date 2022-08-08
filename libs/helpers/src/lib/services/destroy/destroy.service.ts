import {Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { ZuiDestroyCallback } from './models';

/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
@Injectable()
export class ZuiDestroyService extends ReplaySubject<void> implements OnDestroy {
    private readonly cb = new Set<ZuiDestroyCallback>();
    constructor() {
      super(1);
    }

    ngOnDestroy(): void {
      this.next();
      this.complete();
      this.cb.forEach(
        (cb: ZuiDestroyCallback) => cb()
      );
      this.cb.clear();
    }

    public addCallback(cb: () => void): void {
      this.cb.add(cb);
    }
}
