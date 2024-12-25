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
  // @Input()
  items = input<T[]>([]);

  // @Input()
  searchMatcher = input<PrizmComboboxSearchMatcher<T> | ''>('');

  private readonly baseComponent = inject(PrizmComboboxComponent);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdRef = inject(ChangeDetectorRef);

  e = effect(
    () => {
      const items = untracked(this.items);
      const searchMatcher = untracked(this.searchMatcher);
      const search = this.baseComponent.search();
      console.log('#mz search-change', {
        search,
        result: search ? (items.filter(item => this.isSearched(item, search, searchMatcher)) ?? []) : items,
      });
      this.baseComponent.items.set(
        search ? (items.filter(item => this.isSearched(item, search, searchMatcher)) ?? []) : items
      );
      this.cdRef.markForCheck();
    },
    { allowSignalWrites: true }
  );

  // ngOnInit() {
  // this.baseComponent.search
  //   .pipe(
  //     tap(search => {
  //       console.log('#mz search-change', search
  //         ? (this.items.filter(item => this.isSearched(item, search)) ?? [])
  //         : this.items)
  //       this.baseComponent.items.set(
  //         search
  //           ? (this.items.filter(item => this.isSearched(item, search)) ?? [])
  //           : this.items
  //       );
  //       this.cdRef.markForCheck();
  //     }),
  //     takeUntilDestroyed(this.destroyRef)
  //   )
  //   .subscribe();
  // }

  private isSearched(item: T, search: string, searchMatcher: PrizmComboboxSearchMatcher<T> | ''): boolean {
    if (typeof searchMatcher === 'function') return searchMatcher(search, item);

    return this.baseComponent.stringify(item).includes(search);
  }
}
