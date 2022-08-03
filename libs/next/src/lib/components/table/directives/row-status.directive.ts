import { Directive, HostBinding, Input } from '@angular/core';
import { TRowStatus } from '../zui-table.types';

@Directive({
  selector: '[zuiCellStatus]',
})
export class ZuiCellStatusDirective {
  @Input('zuiCellStatus')
  @HostBinding('attr.cell-status')
  status: TRowStatus = 'default';
}
