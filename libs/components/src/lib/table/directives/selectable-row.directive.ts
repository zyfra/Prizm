import { Directive, HostBinding, Input } from '@angular/core';
import { SelectableRow } from 'primeng/table';

@Directive({
  selector: '[zyfraSelectableRow]',
})
export class ZyfraSelectableRowDirective extends SelectableRow {
  @Input('zyfraSelectableRow') override data: any;
  @Input('zyfraSelectableRowIndex') override index: number;

  @HostBinding('class.p-highlight')
  get isSelected(): boolean {
    return this.dt.isSelected(this.data);
  }
}
