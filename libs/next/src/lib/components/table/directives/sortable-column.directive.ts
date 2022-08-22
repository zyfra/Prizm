import { Directive, Input } from '@angular/core';
import { SortableColumn } from 'primeng/table';
import { onSortColumnClick } from '../base-table';
import { ZuiTableComponent } from '../zui-table.component';

@Directive({
  selector: '[zuiSortableColumn]',
})
export class ZuiSortableColumnDirective extends SortableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('zuiSortableColumn') override field: string;
  @Input('zuiSortableColumnDisabled') override pSortableColumnDisabled: boolean;

  constructor(private zuiTable: ZuiTableComponent) {
    super(zuiTable.table);
  }

  public override onClick(event: MouseEvent): void {
    onSortColumnClick.call(this, event);
  }

  private canClick(event: MouseEvent): boolean {
    return this.isEnabled() && !this.isFilterElement(event.target as HTMLElement);
  }

  private shouldReset(): boolean {
    return (
      this.zuiTable.sortMode !== 'multiple' &&
      ((this.zuiTable.defaultSortOrder === 1 && this.sortOrder === 'descending') ||
        (this.zuiTable.defaultSortOrder === -1 && this.sortOrder === 'ascending'))
    );
  }

  private emitSort(event: { field: string; originalEvent: MouseEvent }): void {
    this.dt.sort(event);
  }
}
