import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'prizm-table-header-checkbox',
  templateUrl: './table-header-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTableHeaderCheckboxComponent {
  @HostBinding('attr.testId')
  readonly testId = 'prizm_table_header_checkbox';
}
