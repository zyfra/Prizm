import { Directive, Input } from '@angular/core';
import { SortableColumn } from 'primeng/table';
import { onSortColumnClick } from '../../@core/base-table';
import { ZyfraTableComponent } from '../zyfra-table.component';

@Directive({
  selector: '[zyfraSortableColumn]',
})
export class ZyfraSortableColumnDirective extends SortableColumn {
  @Input('zyfraSortableColumn') override field: string;
  @Input('zyfraSortableColumnDisabled') override pSortableColumnDisabled: boolean;

  constructor(private zyfraTable: ZyfraTableComponent) {
    super(zyfraTable.table);
  }

  public override onClick(event: MouseEvent): void {
    onSortColumnClick.call(this, event);
  }

  private canClick(event: MouseEvent): boolean {
    return this.isEnabled() && !this.isFilterElement(event.target as HTMLElement);
  }

  private shouldReset(): boolean {
    return (
      (this.zyfraTable.defaultSortOrder === 1 && this.sortOrder === 'descending') ||
      (this.zyfraTable.defaultSortOrder === -1 && this.sortOrder === 'ascending')
    );
  }

  private emitSort(event: { originalEvent: MouseEvent }): void {
    this.dt.sort({
      originalEvent: event,
      field: this.field,
    });
  }
}
