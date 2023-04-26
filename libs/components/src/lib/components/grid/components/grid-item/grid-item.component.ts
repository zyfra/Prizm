import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'prizm-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() public colPos = '0';
  @Input() public rowPos = '0';

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_area';
}
