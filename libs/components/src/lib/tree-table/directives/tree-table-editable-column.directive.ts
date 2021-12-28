import { Directive, HostListener, Input } from '@angular/core';
import { TTEditableColumn } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTEditableColumn]',
})
export class ZyfraTreeTableEditableColumnDirective extends TTEditableColumn {
  @Input('zyfraTTEditableColumn') override data: any;
  @Input('zyfraTTEditableColumnField') override field: any;
  @Input('zyfraTTEditableColumnDisabled') override ttEditableColumnDisabled: boolean;

  public override onClick(event: MouseEvent): void {
    // doing nothing, redefining parent class method
  }

  @HostListener('dblclick', ['$event'])
  public onDblClick(event: MouseEvent): void {
    super.onClick(event);
  }
}
