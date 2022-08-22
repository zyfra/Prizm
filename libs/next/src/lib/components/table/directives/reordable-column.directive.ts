import { Directive, HostBinding, Input } from '@angular/core';
import { ReorderableColumn } from 'primeng/table';

@Directive({
  selector: '[zuiReordableColumn]',
})
export class ZuiReordableColumnDirective extends ReorderableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('zuiReordableColumnDisabled') override pReorderableColumnDisabled: boolean;

  @HostBinding('attr.preorderablecolumn') reorderableColumnAttribute = true;
}
