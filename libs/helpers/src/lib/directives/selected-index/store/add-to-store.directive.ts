import { AfterViewInit, Directive, inject, Injector, OnDestroy } from '@angular/core';
import { PrizmStoreByIndexDirective } from './store-by-index.directive';
import { PrizmCurrentIndexDirective } from '@prizm-ui/helpers';
import { PRIZM_STORE_ITEM } from './options';

@Directive({
  selector: '[prizmIndexStorage]',
  standalone: true,
  hostDirectives: [PrizmCurrentIndexDirective],
})
export class PrizmAddToStoreDirective implements AfterViewInit, OnDestroy {
  protected readonly store = inject(PrizmStoreByIndexDirective);
  protected readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  protected readonly injector = inject(Injector);

  public ngAfterViewInit(): void {
    const item = this.injector.get(PRIZM_STORE_ITEM);
    if (!item) {
      throw new Error('Can not get item with token PRIZM_STORE_ITEM');
    }
    this.store.set(this.currentIndexDirective.index, item);
  }

  public ngOnDestroy(): void {
    this.store.delete(this.currentIndexDirective.index);
  }
}
