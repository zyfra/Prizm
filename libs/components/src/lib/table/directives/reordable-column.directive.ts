import { Directive, HostBinding, Input } from '@angular/core';
import { ReorderableColumn } from 'primeng/table';

@Directive({
  selector: '[zyfraReordableColumn]',
})
export class ZyfraReordableColumnDirective extends ReorderableColumn {
  @Input('zyfraReordableColumnDisabled') pReorderableColumnDisabled: boolean;

  @HostBinding('attr.preorderablecolumn') reorderableColumnAttribute = true;
}
