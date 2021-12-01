import { Directive, Input } from '@angular/core';
import { EditableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraEditableRow]',
  providers: [{ provide: EditableRow, useExisting: ZyfraEditableRowDirective }]
})
export class ZyfraEditableRowDirective extends EditableRow {
  @Input('zyfraEditableRow') data: any;
  @Input('zyfraEditableRowDisabled') pEditableRowDisabled: boolean;
}
