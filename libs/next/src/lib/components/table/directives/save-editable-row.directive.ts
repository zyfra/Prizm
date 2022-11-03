import { Directive } from '@angular/core';
import { SaveEditableRow } from 'primeng/table';

@Directive({
  selector: '[pzmSaveEditableRow]',
})
export class PrizmSaveEditableRowDirective extends SaveEditableRow {}
