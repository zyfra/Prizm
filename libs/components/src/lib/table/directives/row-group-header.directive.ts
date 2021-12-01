import { Directive } from '@angular/core';
import { RowGroupHeader } from 'primeng/table';

@Directive({
  selector: '[zyfraRowGroupHeader]'
})
export class ZyfraRowGroupHeaderDirective extends RowGroupHeader {}
