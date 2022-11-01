import { Directive } from '@angular/core';
import { RowGroupHeader } from 'primeng/table';

@Directive({
  selector: '[pzmRowGroupHeader]',
})
export class PzmRowGroupHeaderDirective extends RowGroupHeader {}
