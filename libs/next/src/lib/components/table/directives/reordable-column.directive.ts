import { Directive, HostBinding, Input } from '@angular/core';
import { ReorderableColumn } from 'primeng/table';

@Directive({
  selector: '[pzmReordableColumn]',
})
export class PrizmReordableColumnDirective extends ReorderableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('pzmReordableColumnDisabled') override pReorderableColumnDisabled: boolean;

  @HostBinding('attr.preorderablecolumn') reorderableColumnAttribute = true;
}
