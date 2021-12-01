import { Directive } from '@angular/core';
import { CancelEditableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraCancelEditableRow]'
})
export class ZyfraCancelEditableRowDirective extends CancelEditableRow {}
