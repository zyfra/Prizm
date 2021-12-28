import { Directive, Input } from '@angular/core';
import { TTRow } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTRow]'
})
export class ZyfraTreeTableRowDirective extends TTRow {
  @Input('zyfraTTRow') override rowNode: any;
}
