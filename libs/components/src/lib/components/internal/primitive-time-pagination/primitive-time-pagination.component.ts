import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmFocusableDirective } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_TIME_PAGINATION } from '../../../tokens';
import { prizmI18nInitWithKey } from '../../../services';
import { PrizmLanguageTimePagination } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PrizmTime } from '../../../@core';
import { PrizmTimeWithZeroPipe } from './pipes/time-with-zero.pipe';

@Component({
  selector: `prizm-primitive-time-pagination`,
  templateUrl: `./primitive-time-pagination.component.html`,
  styleUrls: [`./primitive-time-pagination.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PAGINATION, 'timePagination')],
  imports: [CommonModule, PrizmFocusableDirective, PrizmTimeWithZeroPipe],
})
export class PrizmPrimitiveTimePaginationComponent extends PrizmAbstractTestId implements OnInit {
  @Input()
  value: PrizmTime | undefined;

  @Input()
  @prizmDefaultProp()
  hoursActive = false;

  @Input()
  @prizmDefaultProp()
  minutesActive = false;

  @Input()
  @prizmDefaultProp()
  secondsActive = false;

  @Output() actvieModeChange = new EventEmitter<any>();

  override readonly testId_ = 'ui_primitive_time_pagination';

  public readonly hoursCount = 24;
  public readonly minutesAndSecondsCount = 60;

  constructor(
    @Inject(PRIZM_TIME_PAGINATION)
    public readonly dictionary$: Observable<PrizmLanguageTimePagination['timePagination']>
  ) {
    super();
  }

  ngOnInit(): void {
    this.updateActiveMode();
  }

  public updateActiveMode(sheetMode: 24 | 60 = 24): void {
    this.actvieModeChange.emit(sheetMode);
  }
}
