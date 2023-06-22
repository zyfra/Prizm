import { Directive } from '@angular/core';
import { ResizableColumn } from 'primeng/table';

@Directive({
  selector: '[prizmResizableColumn]',
})
export class PrizmResizableColumnDirective extends ResizableColumn {}
