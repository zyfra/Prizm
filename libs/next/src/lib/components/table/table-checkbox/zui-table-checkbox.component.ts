import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional, ViewChild } from '@angular/core';
import { ZuiSelectableRowDirective } from '../directives/selectable-row.directive';
import { TableCheckbox } from 'primeng/table';

@Component({
  selector: 'zui-table-checkbox',
  templateUrl: './zui-table-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiTableCheckboxComponent {
  @ViewChild('checkbox', { static: true }) checkbox: TableCheckbox;

  @Input() disabled: boolean;
  @Input() value: any;
  @Input() index: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() ariaLabel: string;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_table_checkbox';

  constructor(@Optional() private zuiSelectableRow: ZuiSelectableRowDirective) {}

  public onClick(event: Event): void {
    if (this.zuiSelectableRow) {
      event.stopPropagation();
    }
  }
}
