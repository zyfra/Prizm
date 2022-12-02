import { Directive } from '@angular/core';
import { SaveEditableRow } from 'primeng/table';

@Directive({
  selector: '[prizmSaveEditableRow]',
})
export class PrizmSaveEditableRowDirective extends SaveEditableRow {}
