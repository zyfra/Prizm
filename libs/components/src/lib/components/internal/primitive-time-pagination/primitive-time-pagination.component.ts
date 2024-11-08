import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmFocusableDirective } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: `prizm-primitive-time-pagination`,
  templateUrl: `./primitive-time-pagination.component.html`,
  styleUrls: [`./primitive-time-pagination.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmFocusableDirective],
})
export class PrizmPrimitiveTimePaginationComponent extends PrizmAbstractTestId {
  @Input()
  @prizmDefaultProp()
  hoursActive = false;

  @Input()
  @prizmDefaultProp()
  minutesActive = false;

  @Input()
  @prizmDefaultProp()
  secondsActive = false;

  override readonly testId_ = 'ui_primitive_time_pagination';
}
