import { Directive } from '@angular/core';
import { RowGroupHeader } from 'primeng/table';

@Directive({
  selector: '[pzmRowGroupHeader]',
})
export class PrizmRowGroupHeaderDirective extends RowGroupHeader {}
