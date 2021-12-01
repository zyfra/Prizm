import { Directive } from '@angular/core';
import { ResizableColumn } from 'primeng/table';

@Directive({
  selector: '[zyfraResizableColumn]'
})
export class ZyfraResizableColumnDirective extends ResizableColumn {}
