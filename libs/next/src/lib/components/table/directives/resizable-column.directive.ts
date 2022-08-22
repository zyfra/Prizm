import { Directive } from '@angular/core';
import { ResizableColumn } from 'primeng/table';

@Directive({
  selector: '[zuiResizableColumn]',
})
export class ZuiResizableColumnDirective extends ResizableColumn {}
