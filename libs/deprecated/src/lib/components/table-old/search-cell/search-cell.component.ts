import { Component, HostBinding } from '@angular/core';
import { PrizmTableComponent } from '../prizm-table.component';
import { PrizmBaseSearchCellComponent } from '../base-table';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[prizm-search-cell]',
  templateUrl: './search-cell.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSearchCellComponent extends PrizmBaseSearchCellComponent {
  @HostBinding('attr.testId')
  readonly testId = 'prizm_search_cell';

  constructor(public readonly table: PrizmTableComponent) {
    super();
  }
}
