import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  effect,
  inject,
  input,
  Input,
  untracked,
} from '@angular/core';
import { PrizmComboboxSearchMatcher } from './combobox.model';
import { PrizmComboboxComponent } from './combobox.component';

@Directive({
  selector: 'prizm-combobox[searchMatcher]',
  exportAs: 'prizmComboboxOption',
  standalone: true,
})
export class PrizmComboboxSourceItemsDirective<T = any> {
  items = input<T[]>([]);
  searchMatcher = input<PrizmComboboxSearchMatcher<T> | ''>('');
  private readonly baseComponent = inject(PrizmComboboxComponent);
  private readonly cdRef = inject(ChangeDetectorRef);

  readonly itemsUpdateEffect = effect(
    () => {
      const items = untracked(this.items);
      const searchMatcher = untracked(this.searchMatcher);
      const search = this.baseComponent.search();
      this.baseComponent.items.set(
        search ? (items.filter(item => this.isSearched(item, search, searchMatcher)) ?? []) : items
      );
      this.cdRef.markForCheck();
    },
    { allowSignalWrites: true }
  );

  private isSearched(item: T, search: string, searchMatcher: PrizmComboboxSearchMatcher<T> | ''): boolean {
    if (typeof searchMatcher === 'function') return searchMatcher(search, item);

    return this.baseComponent.stringify(item).includes(search);
  }
}
