import { Directive, DoCheck, forwardRef, Inject, OnInit } from '@angular/core';
import { PrizmThComponent } from '../th/th.component';
import { PrizmSortByDirective } from './sort-by.directive';
import { PrizmTableDirective } from './table.directive';
import { PrizmComparator } from '../prizm-table.types';

@Directive({
  selector: `th[prizmTh][prizmSortable]`,
})
export class PrizmSortableDirective<T extends Partial<Record<keyof T, any>>> implements DoCheck, OnInit {
  constructor(
    @Inject(forwardRef(() => PrizmSortByDirective))
    private readonly sortBy: PrizmSortByDirective<T>,
    @Inject(PrizmTableDirective) private readonly table: PrizmTableDirective<T>,
    @Inject(PrizmThComponent) private readonly th: PrizmThComponent<T>
  ) {}

  sorter: PrizmComparator<T> = (): number => 0;

  get key(): keyof T {
    return this.th.key;
  }

  ngOnInit(): void {
    this.sorter = this.match ? this.table.sorter : this.sorter;
    this.th.sorter = this.sorter;
  }

  ngDoCheck(): void {
    if (this.match && this.table.sorter !== this.sorter) {
      this.table.updateSorter(this.sorter);
    }
  }

  private get match(): boolean {
    return this.sortBy.prizmSortBy === this.key;
  }
}
