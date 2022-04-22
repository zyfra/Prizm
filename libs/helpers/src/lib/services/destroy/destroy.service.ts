import {Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
@Injectable()
export class ZuiDestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor() {
      super(1);
    }

    ngOnDestroy(): void {
      this.next();
      this.complete();
    }
}
