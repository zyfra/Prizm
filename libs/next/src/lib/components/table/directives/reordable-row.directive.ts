import { Directive, Input } from '@angular/core';
import { ReorderableRow } from 'primeng/table';

@Directive({
  selector: '[zuiReordableRow]',
})
export class ZuiReordableRowDirective extends ReorderableRow {
  @Input('zuiReordableRow') override index: number;
}
