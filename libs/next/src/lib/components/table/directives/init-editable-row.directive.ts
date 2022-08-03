import { Directive } from '@angular/core';
import { InitEditableRow } from 'primeng/table';

@Directive({
  selector: '[zuiInitEditableRow]',
})
export class ZuiInitEditableRowDirective extends InitEditableRow {}
