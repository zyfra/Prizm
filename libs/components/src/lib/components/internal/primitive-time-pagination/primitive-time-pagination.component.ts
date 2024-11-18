import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmFocusableDirective } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_TIME_PAGINATION } from '../../../tokens';
import { prizmI18nInitWithKey } from '../../../services';
import { PrizmLanguageTimePagination } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PrizmPluckPipe } from '@prizm-ui/helpers';

@Component({
  selector: `prizm-primitive-time-pagination`,
  templateUrl: `./primitive-time-pagination.component.html`,
  styleUrls: [`./primitive-time-pagination.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PAGINATION, 'timePagination')],
  imports: [CommonModule, PrizmFocusableDirective, PrizmPluckPipe],
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

  constructor(
    @Inject(PRIZM_TIME_PAGINATION)
    public readonly dictionary$: Observable<PrizmLanguageTimePagination['timePagination']>
  ) {
    super();
  }
}
