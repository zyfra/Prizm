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
  @HostBinding('class')
  class = '';

  @Input()
  maxValue: number | undefined;

  @Input()
  @HostBinding('attr.status')
  status = '';

  override readonly testId_ = 'ui_counter';

  public _value!: number;

  @HostBinding('class.hidden') get hidden() {
    return !this._value;
  }

  @Input() set value(val: number | undefined) {
    this._value = val ?? 0;
  }
}
