import { Component, HostBinding } from '@angular/core';
import { PzmTableComponent } from '../pzm-table.component';
import { PzmBaseSearchCellComponent } from '../base-table';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[pzm-search-cell]',
  templateUrl: './search-cell.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmSearchCellComponent extends PzmBaseSearchCellComponent {
  @HostBinding('attr.testId')
  readonly testId = 'pzm_search_cell';

  constructor(public readonly table: PzmTableComponent) {
    super();
  }
}
