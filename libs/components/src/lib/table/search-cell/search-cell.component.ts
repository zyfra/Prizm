import { Component } from '@angular/core';
import { ZyfraBaseSearchCellComponent } from '../../@core/base-table';
import { ZyfraTableComponent } from '../zyfra-table.component';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[zyfra-search-cell]',
  templateUrl: './search-cell.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSearchCellComponent extends ZyfraBaseSearchCellComponent {
  constructor(public readonly table: ZyfraTableComponent) {
    super();
  }
}
