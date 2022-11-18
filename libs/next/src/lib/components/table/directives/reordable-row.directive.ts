import { Directive, Input } from '@angular/core';
import { ReorderableRow } from 'primeng/table';

@Directive({
  selector: '[prizmReordableRow]',
})
export class PrizmReordableRowDirective extends ReorderableRow {
  @Input('prizmReordableRow') override index: number;
}
