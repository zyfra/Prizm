import { Directive } from '@angular/core';
import { InitEditableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraInitEditableRow]'
})
export class ZyfraInitEditableRowDirective extends InitEditableRow {}
