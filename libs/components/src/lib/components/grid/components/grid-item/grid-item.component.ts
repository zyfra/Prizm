import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { AbstractPrizmTestId } from '../../../../abstract/interactive';

@Component({
  selector: 'prizm-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent extends AbstractPrizmTestId {
  @Input() public colPos = '0';
  @Input() public rowPos = '0';

  override readonly testId_ = 'ui_area';
}
