import { Directive } from '@angular/core';
import { ResizableColumn } from 'primeng/table';

@Directive({
  selector: '[pzmResizableColumn]',
})
export class PzmResizableColumnDirective extends ResizableColumn {}
