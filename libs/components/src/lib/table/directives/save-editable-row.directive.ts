import { Directive } from '@angular/core';
import { SaveEditableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraSaveEditableRow]'
})
export class ZyfraSaveEditableRowDirective extends SaveEditableRow {}
