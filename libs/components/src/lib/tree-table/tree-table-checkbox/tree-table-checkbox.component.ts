import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { ZyfraTreeTableSelectableRowDirective } from '../directives/tree-table-selectable-row.directive';

@Component({
  selector: 'zyfra-tree-table-checkbox',
  templateUrl: './tree-table-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTreeTableCheckboxComponent {
  @Input() disabled: boolean;
  @Input('value') rowNode: any;

  constructor(@Optional() private selectableRowDirective: ZyfraTreeTableSelectableRowDirective) {}

  onClick(event: Event): void {
    if (this.selectableRowDirective) {
      event.stopPropagation();
    }
  }
}
