import { AfterViewInit, Directive, inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { PrizmStoreByIndexDirective } from './store-by-index.directive';
import { PrizmCurrentIndexDirective } from '../current-index.directive';
import { PRIZM_STORE_ITEM } from './options';

@Directive({
  selector: '[prizmIndexStorage]',
  standalone: true,
})
export class PrizmAddToStoreDirective implements OnInit, OnDestroy {
  protected readonly store = inject(PrizmStoreByIndexDirective);
  protected readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  protected readonly injector = inject(Injector);

  public ngOnInit(): void {
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
