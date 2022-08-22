import { Directive } from '@angular/core';
import { SaveEditableRow } from 'primeng/table';

@Directive({
  selector: '[zuiSaveEditableRow]',
})
export class ZuiSaveEditableRowDirective extends SaveEditableRow {}
