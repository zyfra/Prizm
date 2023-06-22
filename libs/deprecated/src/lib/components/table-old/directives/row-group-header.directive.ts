import { Directive } from '@angular/core';
import { RowGroupHeader } from 'primeng/table';

@Directive({
  selector: '[prizmRowGroupHeader]',
})
export class PrizmRowGroupHeaderDirective extends RowGroupHeader {}
