import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'zui-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() public colPos = '0';
  @Input() public rowPos = '0';
}
