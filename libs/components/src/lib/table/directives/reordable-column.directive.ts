import { Directive, HostBinding, Input } from '@angular/core';
import { ReorderableColumn } from 'primeng/table';

@Directive({
  selector: '[zyfraReordableColumn]',
})
export class ZyfraReordableColumnDirective extends ReorderableColumn {
  @Input('zyfraReordableColumnDisabled') override pReorderableColumnDisabled: boolean;

  @HostBinding('attr.preorderablecolumn') reorderableColumnAttribute = true;
}
