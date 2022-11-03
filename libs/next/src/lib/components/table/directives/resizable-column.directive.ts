import { Directive } from '@angular/core';
import { ResizableColumn } from 'primeng/table';

@Directive({
  selector: '[pzmResizableColumn]',
})
export class PrizmResizableColumnDirective extends ResizableColumn {}
