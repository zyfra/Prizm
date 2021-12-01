import { Directive, HostListener, Input } from '@angular/core';
import { TTEditableColumn } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTEditableColumn]',
})
export class ZyfraTreeTableEditableColumnDirective extends TTEditableColumn {
  @Input('zyfraTTEditableColumn') data: any;
  @Input('zyfraTTEditableColumnField') field: any;
  @Input('zyfraTTEditableColumnDisabled') ttEditableColumnDisabled: boolean;

  onClick(event: MouseEvent): void {
    // doing nothing, redefining parent class method
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event: MouseEvent): void {
    super.onClick(event);
  }
}
