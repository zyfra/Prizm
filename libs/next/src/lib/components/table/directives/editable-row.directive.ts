import { Directive, HostBinding, Input } from '@angular/core';
import { EditableRow } from 'primeng/table';

@Directive({
  selector: '[zuiEditableRow]',
  providers: [{ provide: EditableRow, useExisting: ZuiEditableRowDirective }],
})
export class ZuiEditableRowDirective extends EditableRow {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('zuiEditableRowDisabled') override pEditableRowDisabled: boolean;
  @Input('zuiEditableRow') override data: any;
  @HostBinding('attr.editable') editable = true;
}
