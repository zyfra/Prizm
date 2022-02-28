import { Directive, Input } from '@angular/core';
import { TTSortableColumn } from 'primeng/treetable';
import { onSortColumnClick } from '../../@core/base-table';
import { ZyfraTreeTableComponent } from '../tree-table.component';

@Directive({
  selector: '[zyfraTTSortableColumn]',
})
export class ZyfraTreeTableSortableColumnDirective extends TTSortableColumn {
  @Input('zyfraTTSortableColumn') override field: string;
  @Input('zyfraTTSortableColumnDisabled') override ttSortableColumnDisabled: boolean;

  constructor(private zyfraTable: ZyfraTreeTableComponent) {
    super(zyfraTable.table);
  }

  public override onClick(event: MouseEvent): void {
    onSortColumnClick.call(this, event);
  }

  private canClick(): boolean {
    return this.isEnabled();
  }

  private shouldReset(): boolean {
    const table = this.zyfraTable.table;

    return (
      (table.defaultSortOrder === 1 && table.sortOrder === -1) ||
      (table.defaultSortOrder === -1 && table.sortOrder === 1)
    );
  }

  private emitSort(event: { field: string; originalEvent: PointerEvent }): void {
    this.tt.sort(event);
  }
}
