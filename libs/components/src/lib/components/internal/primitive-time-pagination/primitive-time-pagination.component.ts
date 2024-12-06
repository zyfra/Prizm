import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmFocusableDirective } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_TIME_PAGINATION } from '../../../tokens';
import { prizmI18nInitWithKey } from '../../../services';
import { PrizmLanguageTimePagination } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PrizmTimePaginationState } from './types/types';
import { PrizmTimePickerInternalTime } from '../../time-picker/types/types';
import { PrizmNumberWithZeroPipe } from '../../../pipes/number-with-zero';

@Component({
  selector: `prizm-primitive-time-pagination`,
  templateUrl: `./primitive-time-pagination.component.html`,
  styleUrls: [`./primitive-time-pagination.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PAGINATION, 'timePagination')],
  imports: [CommonModule, PrizmFocusableDirective, PrizmNumberWithZeroPipe],
})
export class PrizmPrimitiveTimePaginationComponent extends PrizmAbstractTestId {
  @Input()
  value: PrizmTimePickerInternalTime | undefined;

  @Input()
  @prizmDefaultProp()
  timeMode: 'HH:MM' | 'HH:MM:SS' = 'HH:MM:SS';

  @Input()
  @prizmDefaultProp()
  activeMode: PrizmTimePaginationState = 'hours';

  @Output() actvieModeChange = new EventEmitter<PrizmTimePaginationState>();

  override readonly testId_ = 'ui_primitive_time_pagination';

  constructor(
    @Inject(PRIZM_TIME_PAGINATION)
    public readonly dictionary$: Observable<PrizmLanguageTimePagination['timePagination']>
  ) {
    super();
  }

  public updateActiveMode(mode: PrizmTimePaginationState = 'hours'): void {
    this.actvieModeChange.emit(mode);
  }
}
