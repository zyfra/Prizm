import { Directive, HostBinding, Input } from '@angular/core';
import { TTReorderableColumn } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTReorderableColumn]',
})
export class ZyfraTreeTableReorderableColumnDirective extends TTReorderableColumn {
  @Input('zyfraTTReorderableColumnDisabled') override ttReorderableColumnDisabled: boolean;

  @HostBinding('attr.ttreorderablecolumn') reorderableTTColumnAttribute = true;
}
