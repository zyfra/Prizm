import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zyfra-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSortIconComponent {
  @Input() field: string;
}
