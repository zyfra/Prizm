import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-counter',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCounterComponent extends PrizmAbstractTestId {
  @Input()
  @HostBinding('class._disabled')
  disabled = false;

  @Input()
  @HostBinding('class')
  class = '';

  @Input()
  @HostBinding('attr.status')
  status = '';

  @Input() value: number | string | undefined;

  override readonly testId_ = 'ui_counter';
}
