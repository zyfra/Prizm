import { afterRender, Directive, inject, Injector, OnDestroy } from '@angular/core';
import { PrizmStoreByIndexDirective } from './store-by-index.directive';
import { PrizmCurrentIndexDirective } from '../current-index.directive';
import { PRIZM_STORE_ITEM } from './options';
import { Compare } from '../../../util';

@Directive({
  selector: '[prizmIndexStorage]',
  standalone: true,
})
export class PrizmAddToStoreDirective implements OnDestroy {
  protected readonly store = inject(PrizmStoreByIndexDirective);
  protected readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  protected readonly injector = inject(Injector);
  private previousIndex?: number;

  constructor() {
    afterRender(() => {
      this.updateIndexIfChange();
    });
  }

  public ngOnDestroy(): void {
    if (Compare.isNotNullish(this.previousIndex)) this.store.delete(this.previousIndex);
  }

  private updateIndexIfChange() {
    // block when not change > return false
    if (this.previousIndex === this.currentIndexDirective.index) return false;
    // remove previous index item
    if (Compare.isNotNullish(this.previousIndex)) this.store.delete(this.previousIndex);
    // get item
    const item = this.injector.get(PRIZM_STORE_ITEM);
    if (!item) {
      throw new Error('Can not get item with token PRIZM_STORE_ITEM');
    }
    // save new item
    this.store.set(this.currentIndexDirective.index, item);
    // update previous index
    this.previousIndex = this.currentIndexDirective.index;
    return true;
  }
}
