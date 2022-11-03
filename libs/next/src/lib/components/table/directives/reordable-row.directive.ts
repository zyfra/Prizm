import { Directive, Input } from '@angular/core';
import { ReorderableRow } from 'primeng/table';

@Directive({
  selector: '[pzmReordableRow]',
})
export class PrizmReordableRowDirective extends ReorderableRow {
  @Input('pzmReordableRow') override index: number;
}
