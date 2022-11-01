import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'zui-table-header-checkbox',
  templateUrl: './table-header-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiTableHeaderCheckboxComponent {
  @HostBinding('attr.testId')
  readonly testId = 'pzm_table_header_checkbox';
}
