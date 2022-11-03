import { Directive, Input } from '@angular/core';
import { SortableColumn } from 'primeng/table';
import { onSortColumnClick } from '../base-table';
import { PrizmTableComponent } from '../pzm-table.component';

@Directive({
  selector: '[pzmSortableColumn]',
})
export class PrizmSortableColumnDirective extends SortableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('pzmSortableColumn') override field: string;
  @Input('pzmSortableColumnDisabled') override pSortableColumnDisabled: boolean;

  constructor(private pzmTable: PrizmTableComponent) {
    super(pzmTable.table);
  }

  public override onClick(event: MouseEvent): void {
    onSortColumnClick.call(this, event);
  }

  private canClick(event: MouseEvent): boolean {
    return this.isEnabled() && !this.isFilterElement(event.target as HTMLElement);
  }

  private shouldReset(): boolean {
    return (
      this.pzmTable.sortMode !== 'multiple' &&
      ((this.pzmTable.defaultSortOrder === 1 && this.sortOrder === 'descending') ||
        (this.pzmTable.defaultSortOrder === -1 && this.sortOrder === 'ascending'))
    );
  }

  private emitSort(event: { field: string; originalEvent: MouseEvent }): void {
    this.dt.sort(event);
  }
}
