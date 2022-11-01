import { Directive, HostBinding, Input } from '@angular/core';
import { TRowStatus } from '../pzm-table.types';

@Directive({
  selector: '[pzmCellStatus]',
})
export class PzmCellStatusDirective {
  @Input('pzmCellStatus')
  @HostBinding('attr.cell-status')
  status: TRowStatus = 'default';
}
