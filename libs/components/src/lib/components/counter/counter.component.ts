import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCounterComponent extends PrizmAbstractTestId {
  @Input()
  @HostBinding('class._disabled')
  disabled = false;

  @Input()
  @HostBinding('attr.status')
  status = '';

  @Input() value!: number | string;

  override readonly testId_ = 'ui_counter';
}
