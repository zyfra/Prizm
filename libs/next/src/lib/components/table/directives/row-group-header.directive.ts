import { Directive } from '@angular/core';
import { RowGroupHeader } from 'primeng/table';

@Directive({
  selector: '[zuiRowGroupHeader]',
})
export class ZuiRowGroupHeaderDirective extends RowGroupHeader {}
