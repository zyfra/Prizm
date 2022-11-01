import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'zui-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() public colPos = '0';
  @Input() public rowPos = '0';

  @HostBinding('attr.testId')
  readonly testId = 'pzm_grid_item';
}
