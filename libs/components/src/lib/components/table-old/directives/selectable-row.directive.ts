import { Directive, HostBinding, Input } from '@angular/core';
import { SelectableRow } from 'primeng/table';

@Directive({
  selector: '[prizmSelectableRow]',
})
export class PrizmSelectableRowDirective extends SelectableRow {
  @Input('prizmSelectableRow') override data: any;
  @Input('prizmSelectableRowIndex') override index: number;

  @HostBinding('class.p-highlight')
  get isSelected(): boolean {
    return this.dt.isSelected(this.data);
  }
}
