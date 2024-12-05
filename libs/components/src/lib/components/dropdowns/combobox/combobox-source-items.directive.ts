import { ChangeDetectorRef, DestroyRef, Directive, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { PrizmComboboxSearchMatcher } from './combobox.model';
import { PrizmComboboxComponent } from './combobox.component';

@Directive({
  selector: 'prizm-combobox[searchMatcher]',
  exportAs: 'prizmComboboxOption',
  standalone: true,
})
export class PrizmComboboxSourceItemsDirective<T = any> implements OnInit {
  @Input()
  items: T[] = [];

  @Input()
  searchMatcher: PrizmComboboxSearchMatcher<T> | '' = '';

  private readonly baseComponent = inject(PrizmComboboxComponent);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.baseComponent.searchChange
      .pipe(
        tap(search => {
          this.baseComponent.items = search
            ? this.items.filter(item => this.isSearched(item, search)) ?? []
            : this.items;
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private isSearched(item: T, search: string): boolean {
    if (typeof this.searchMatcher === 'function') return this.searchMatcher(search, item);

    return this.baseComponent.stringify(item).includes(search);
  }
}
