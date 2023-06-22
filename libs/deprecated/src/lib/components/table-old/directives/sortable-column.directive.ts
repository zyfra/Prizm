import { Directive, Input } from '@angular/core';
import { SortableColumn } from 'primeng/table';
import { onSortColumnClick } from '../base-table';
import { PrizmTableComponent } from '../prizm-table.component';

@Directive({
  selector: '[prizmSortableColumn]',
})
export class PrizmSortableColumnDirective extends SortableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('prizmSortableColumn') override field: string;
  @Input('prizmSortableColumnDisabled') override pSortableColumnDisabled: boolean;

  constructor(private prizmTable: PrizmTableComponent) {
    super(prizmTable.table);
  }

  public override onClick(event: MouseEvent): void {
    onSortColumnClick.call(this, event);
  }

  private canClick(event: MouseEvent): boolean {
    return this.isEnabled() && !this.isFilterElement(event.target as HTMLElement);
  }

  private shouldReset(): boolean {
    return (
      this.prizmTable.sortMode !== 'multiple' &&
      ((this.prizmTable.defaultSortOrder === 1 && this.sortOrder === 'descending') ||
        (this.prizmTable.defaultSortOrder === -1 && this.sortOrder === 'ascending'))
    );
  }

  private emitSort(event: { field: string; originalEvent: MouseEvent }): void {
    this.dt.sort(event);
  }
}
