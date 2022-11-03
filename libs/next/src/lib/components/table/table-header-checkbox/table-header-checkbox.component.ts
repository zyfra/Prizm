import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pzm-table-header-checkbox',
  templateUrl: './table-header-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmTableHeaderCheckboxComponent {
  @HostBinding('attr.testId')
  readonly testId = 'pzm_table_header_checkbox';
}
