import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional, ViewChild } from '@angular/core';
import { PrizmSelectableRowDirective } from '../directives/selectable-row.directive';
import { TableCheckbox } from 'primeng/table';

@Component({
  selector: 'prizm-table-checkbox',
  templateUrl: './prizm-table-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTableCheckboxComponent {
  @ViewChild('checkbox', { static: true }) checkbox: TableCheckbox;

  @Input() disabled: boolean;
  @Input() value: any;
  @Input() index: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() ariaLabel: string;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_table_checkbox';

  constructor(@Optional() private prizmSelectableRow: PrizmSelectableRowDirective) {}

  public onClick(event: Event): void {
    if (this.prizmSelectableRow) {
      event.stopPropagation();
    }
  }
}
