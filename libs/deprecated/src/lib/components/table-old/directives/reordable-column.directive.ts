import { Directive, HostBinding, Input } from '@angular/core';
import { ReorderableColumn } from 'primeng/table';

@Directive({
  selector: '[prizmReordableColumn]',
})
export class PrizmReordableColumnDirective extends ReorderableColumn {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('prizmReordableColumnDisabled') override pReorderableColumnDisabled: boolean;

  @HostBinding('attr.preorderablecolumn') reorderableColumnAttribute = true;
}
