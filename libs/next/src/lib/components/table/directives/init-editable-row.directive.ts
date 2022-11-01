import { Directive } from '@angular/core';
import { InitEditableRow } from 'primeng/table';

@Directive({
  selector: '[pzmInitEditableRow]',
})
export class PzmInitEditableRowDirective extends InitEditableRow {}
