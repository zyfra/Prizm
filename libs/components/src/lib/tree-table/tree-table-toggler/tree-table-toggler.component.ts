import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zyfra-tree-table-toggler',
  templateUrl: './tree-table-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTreeTableTogglerComponent {
  @Input() rowNode: any;
}
