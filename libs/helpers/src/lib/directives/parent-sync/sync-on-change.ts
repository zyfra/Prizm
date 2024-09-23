import { Directive, inject, OnChanges } from '@angular/core';
import { PrizmSyncParentDirective } from './parent.directive';

@Directive()
export abstract class PrizmSyncOnChange implements OnChanges {
  private readonly syncParentDirective = inject(PrizmSyncParentDirective);

  ngOnChanges(): void {
    this.syncParentDirective.sync();
  }
}
