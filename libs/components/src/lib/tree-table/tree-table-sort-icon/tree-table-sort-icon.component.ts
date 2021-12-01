import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zyfra-tree-table-sort-icon',
  templateUrl: './tree-table-sort-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTreeTableSortIconComponent {
  @Input() field: string;
  @Input() ariaLabelDesc: string;
  @Input() ariaLabelAsc: string;
}
