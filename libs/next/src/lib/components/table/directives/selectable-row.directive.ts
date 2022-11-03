import { Directive, HostBinding, Input } from '@angular/core';
import { SelectableRow } from 'primeng/table';

@Directive({
  selector: '[pzmSelectableRow]',
})
export class PrizmSelectableRowDirective extends SelectableRow {
  @Input('pzmSelectableRow') override data: any;
  @Input('pzmSelectableRowIndex') override index: number;

  @HostBinding('class.p-highlight')
  get isSelected(): boolean {
    return this.dt.isSelected(this.data);
  }
}
