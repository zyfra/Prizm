import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, signal } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveTimePickerComponent } from '../internal/primitive-time-picker';
import { PrizmPrimitiveTimePaginationComponent } from '../internal/primitive-time-pagination';
import { PrizmScrollbarComponent } from '../scrollbar';
import { PrizmTimeSheetPipe } from './pipes/time-sheet.pipe';
import { PrizmTime } from '../../@core';
import { PrizmButtonComponent } from '../button';
import { PRIZM_TIME_PICKER } from '../../tokens';
import { prizmI18nInitWithKey } from '../../services';
import { Observable } from 'rxjs';
import { PrizmLanguageTimePicker } from '@prizm-ui/i18n';

@Component({
  selector: `prizm-time-picker`,
  templateUrl: `./time-picker.component.html`,
  styleUrls: [`./time-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmPrimitiveTimePaginationComponent,
    PrizmPrimitiveTimePickerComponent,
    PrizmScrollbarComponent,
    PrizmTimeSheetPipe,
    PrizmButtonComponent,
  ],
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PICKER, 'timePicker')],
})
export class PrizmTimePickerComponent extends PrizmAbstractTestId {
  @Output()
  readonly timeChanged = new EventEmitter<PrizmTime>();

  @Output()
  readonly canceled = new EventEmitter<void>();

  public timeSheetCount = signal(24);
  public currentTimeValue = signal<PrizmTime | undefined>(undefined);

  public clickedHour: number | null = null;
  public clickedMinute: number | null = null;
  public clickedSecond: number | null = null;
  override readonly testId_ = 'ui_time_picker';

  constructor(
    @Inject(PRIZM_TIME_PICKER)
    public readonly dictionary$: Observable<PrizmLanguageTimePicker['timePicker']>
  ) {
    super();
  }

  public setValue() {
    this.currentTimeValue.set(
      new PrizmTime(this.clickedHour ?? 0, this.clickedMinute ?? 0, this.clickedSecond ?? 0)
    );
    this.timeChanged.emit(this.currentTimeValue());
  }

  public cancel() {
    this.canceled.emit();
  }
}
