import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCounterComponent extends PrizmAbstractTestId {
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 'l';
  @Input() public count!: number;

  override readonly testId_ = 'ui_counter';
}
