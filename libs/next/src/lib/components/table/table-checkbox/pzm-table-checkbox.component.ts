import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional, ViewChild } from '@angular/core';
import { PzmSelectableRowDirective } from '../directives/selectable-row.directive';
import { TableCheckbox } from 'primeng/table';

@Component({
  selector: 'pzm-table-checkbox',
  templateUrl: './pzm-table-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmTableCheckboxComponent {
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

  constructor(@Optional() private pzmSelectableRow: PzmSelectableRowDirective) {}

  public onClick(event: Event): void {
    if (this.pzmSelectableRow) {
      event.stopPropagation();
    }
  }
}
