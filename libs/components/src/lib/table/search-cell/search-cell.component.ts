import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZyfraBaseSearchCellComponent } from '../../@core/base-table';
import { ZyfraTableComponent } from '../zyfra-table.component';

@Component({
  selector: '[zyfra-search-cell]',
  templateUrl: './search-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSearchCellComponent extends ZyfraBaseSearchCellComponent {
  constructor(public readonly table: ZyfraTableComponent) {
    super();
  }
}
