import { Directive, HostBinding, Input } from '@angular/core';
import { SelectableRow } from 'primeng/table';

@Directive({
  selector: '[zuiSelectableRow]',
})
export class ZuiSelectableRowDirective extends SelectableRow {
  @Input('zuiSelectableRow') override data: any;
  @Input('zuiSelectableRowIndex') override index: number;

  @HostBinding('class.p-highlight')
  get isSelected(): boolean {
    return this.dt.isSelected(this.data);
  }
}
