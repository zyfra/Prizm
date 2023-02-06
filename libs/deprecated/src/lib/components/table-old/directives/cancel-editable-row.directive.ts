import { Directive } from '@angular/core';
import { CancelEditableRow } from 'primeng/table';

@Directive({
  selector: '[prizmCancelEditableRow]',
})
export class PrizmCancelEditableRowDirective extends CancelEditableRow {}
