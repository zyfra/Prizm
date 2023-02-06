import { Directive, HostBinding, Input } from '@angular/core';
import { EditableRow } from 'primeng/table';

@Directive({
  selector: '[prizmEditableRow]',
  providers: [{ provide: EditableRow, useExisting: PrizmEditableRowDirective }],
})
export class PrizmEditableRowDirective extends EditableRow {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('prizmEditableRowDisabled') override pEditableRowDisabled: boolean;
  @Input('prizmEditableRow') override data: any;
  @HostBinding('attr.editable') editable = true;
}
