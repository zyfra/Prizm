import { ChangeDetectionStrategy, Component, Input, Optional, ViewChild } from '@angular/core';
import { ZyfraSelectableRowDirective } from '../directives/selectable-row.directive';
import { TableCheckbox } from 'primeng/table';

@Component({
  selector: 'zyfra-table-checkbox',
  templateUrl: './zyfra-table-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTableCheckboxComponent {
  @ViewChild('checkbox', { static: true }) checkbox: TableCheckbox;

  @Input() disabled: boolean;
  @Input() value: any;
  @Input() index: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() ariaLabel: string;

  constructor(
    @Optional() private zyfraSelectableRow: ZyfraSelectableRowDirective
  ) {}

  onClick(event: Event): void {
    if (this.zyfraSelectableRow) {
      event.stopPropagation();
    }
  }
}
