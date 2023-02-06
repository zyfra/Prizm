import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'prizm-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSortIconComponent {
  @Input() field: string;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_sort_icon';
}
