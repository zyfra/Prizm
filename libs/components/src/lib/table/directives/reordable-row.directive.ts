import { Directive, Input } from '@angular/core';
import { ReorderableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraReordableRow]'
})
export class ZyfraReordableRowDirective extends ReorderableRow {
  @Input('zyfraReordableRow') index: number;
}
