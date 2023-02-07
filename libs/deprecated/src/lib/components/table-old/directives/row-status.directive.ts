import { Directive, HostBinding, Input } from '@angular/core';
import { TRowStatus } from '../prizm-table.types';

@Directive({
  selector: '[prizmCellStatus]',
})
export class PrizmCellStatusDirective {
  @Input('prizmCellStatus')
  @HostBinding('attr.cell-status')
  status: TRowStatus = 'default';
}
