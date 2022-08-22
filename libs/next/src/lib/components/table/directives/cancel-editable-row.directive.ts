import { Directive } from '@angular/core';
import { CancelEditableRow } from 'primeng/table';

@Directive({
  selector: '[zuiCancelEditableRow]',
})
export class ZuiCancelEditableRowDirective extends CancelEditableRow {}
