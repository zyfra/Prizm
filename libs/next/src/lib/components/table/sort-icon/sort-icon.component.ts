import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zui-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiSortIconComponent {
  @Input() field: string;
}
