import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZyfraBaseSearchCellComponent } from '../../@core/base-table';
import { ZyfraTreeTableComponent } from '../tree-table.component';

@Component({
  selector: '[zyfra-search-cell]',
  templateUrl: './tree-table-search-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTreeTableSearchCellComponent extends ZyfraBaseSearchCellComponent {
  constructor(public readonly table: ZyfraTreeTableComponent) {
    super();
  }
}
