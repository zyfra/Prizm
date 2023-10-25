import { Inject, Pipe, PipeTransform } from '@angular/core';

import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmComparator } from '../table.types';
import { prizmPure } from '@prizm-ui/core';

@Pipe({
  name: `prizmTableSort`,
  pure: false,
})
export class PrizmTableSortPipe<T extends Partial<Record<keyof T, unknown>>> implements PipeTransform {
  constructor(@Inject(PrizmTableDirective) private readonly table: PrizmTableDirective<T>) {}

  public transform(data: readonly T[]): readonly T[] {
    return this.sort(data, this.table.sorter, this.table.direction);
  }

  @prizmPure
  private sort(data: readonly T[], sorter: PrizmComparator<T>, direction: -1 | 1): readonly T[] {
    return [...data].sort((a, b) => direction * sorter(a, b));
  }
}
