import { Component } from '@angular/core';
import { ZyfraBaseSearchCellComponent } from '../../@core/base-table';
import { ZyfraTreeTableComponent } from '../tree-table.component';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[zyfra-search-cell]',
  templateUrl: './tree-table-search-cell.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTreeTableSearchCellComponent extends ZyfraBaseSearchCellComponent {
  constructor(public readonly table: ZyfraTreeTableComponent) {
    super();
  }
}
