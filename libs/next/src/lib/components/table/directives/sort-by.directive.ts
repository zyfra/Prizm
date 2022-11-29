import { ContentChildren, Directive, Inject, Input, Output, QueryList } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { PrizmSortableDirective } from './sortable.directive';
import { PrizmTableDirective } from './table.directive';
import { PrizmComparator } from '../prizm-table.types';
import { prizmDefaultProp } from '@prizm-ui/core';

@Directive({
  selector: `table[prizmTable][prizmSortBy]`,
})
export class PrizmSortByDirective<T extends Partial<Record<keyof T, any>>> {
  @ContentChildren(PrizmSortableDirective, { descendants: true })
  private readonly sortables: QueryList<PrizmSortableDirective<T>> = new QueryList<
    PrizmSortableDirective<T>
  >();

  @Input()
  @prizmDefaultProp()
  prizmSortBy: keyof T | string | null = null;

  @Output()
  readonly prizmSortByChange = this.table.sorterChange.pipe(
    filter(() => !!this.sortables.length),
    map(sorter => this.getKey(sorter))
  );

  constructor(@Inject(PrizmTableDirective) private readonly table: PrizmTableDirective<T>) {}

  private getKey(sorter: PrizmComparator<T> | null): keyof T | null {
    return this.sortables.find(s => s.sorter === sorter)?.key || null;
  }
}
