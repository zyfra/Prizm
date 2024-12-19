import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  Inject,
  input,
  output,
  signal,
} from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveTimePickerComponent } from '../internal/primitive-time-picker';
import { PrizmPrimitiveTimePaginationComponent } from '../internal/primitive-time-pagination';
import { PrizmScrollbarComponent } from '../scrollbar';
import { PrizmTime } from '../../@core';
import { PrizmButtonComponent } from '../button';
import { PRIZM_TIME_PICKER } from '../../tokens';
import { prizmI18nInitWithKey } from '../../services';
import { Observable } from 'rxjs';
import { PrizmLanguageTimePicker } from '@prizm-ui/i18n';
import { PrizmTimePaginationState } from '../internal/primitive-time-pagination/types/types';
import { PrizmTimePickerInternalTime } from './types/types';
import { PrizmTimePickerDisabledItemsPipe } from './pipes/picker-disable-items.pipe';
import { PrizmTimeSheetPipe } from './pipes/time-sheet.pipe';
import { PrizmPickerDisablePipe } from './pipes/picker-disable.pipe';
import { Compare } from '@prizm-ui/helpers';

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
    PrizmTimePickerDisabledItemsPipe,
    PrizmPickerDisablePipe,
    PrizmButtonComponent,
  ],
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PICKER, 'timePicker')],
})
export class PrizmTimePickerComponent extends PrizmAbstractTestId {
  public timeChanged = output<PrizmTime>();

  public canceled = output<void>();

  public time = input<PrizmTime | undefined>();
  public timeMode = input<'HH:MM' | 'HH:MM:SS'>('HH:MM:SS');
  public minTime = input<PrizmTime>();
  public maxTime = input<PrizmTime>();

  public timeSheetState = signal<PrizmTimePaginationState>('hours');

  public internalTime: PrizmTimePickerInternalTime = {};

  override readonly testId_ = 'ui_time_picker';

  constructor(
    @Inject(PRIZM_TIME_PICKER)
    public readonly dictionary$: Observable<PrizmLanguageTimePicker['timePicker']>,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();

    effect(() => {
      this.updateinternalTime(this.time());
    });
  }

  public timeClicked(time: number) {
    const internalTime = { ...this.internalTime };
    const sheetState = this.timeSheetState();

    internalTime[sheetState] = time;

    if ((sheetState !== 'seconds' && this.minTime()) || this.maxTime()) {
      this.internalTime = this.getCorrectedTime(internalTime);
    } else {
      this.internalTime = internalTime;
    }
  }

  public setValue() {
    const internal = this.getCorrectedTime(
      { ...this.internalTime, seconds: this.timeMode() === 'HH:MM' ? 0 : this.internalTime.seconds },
      true
    );

    const time = new PrizmTime(internal.hours, internal.minutes, internal.seconds);

    this.updateinternalTime(time);
    this.timeChanged.emit(time);
  }

  public cancel() {
    this.internalTime = {};
    this.canceled.emit();
  }

  private updateinternalTime(time: PrizmTime | undefined) {
    if (!time) {
      this.internalTime = {};
    } else {
      this.internalTime = {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds,
      };
    }

    this.cdr.markForCheck();
  }

  private getCorrectedTime(time: PrizmTimePickerInternalTime): PrizmTimePickerInternalTime;
  private getCorrectedTime(
    time: PrizmTimePickerInternalTime,
    setZero: boolean
  ): Required<PrizmTimePickerInternalTime>;

  private getCorrectedTime(
    time: PrizmTimePickerInternalTime,
    setZero?: boolean
  ): PrizmTimePickerInternalTime {
    let result = { ...time };

    if (Compare.isNotNullish(setZero)) {
      (result.hours = result.hours ?? 0),
        (result.minutes = result.minutes ?? 0),
        (result.seconds = result.seconds ?? 0);
    }

    const min = this.minTime();
    const max = this.maxTime();

    if (min) {
      result = this.correctValueByMin(result, min);
    }

    if (max) {
      result = this.correctValueByMax(result, max);
    }

    return result;
  }

  private correctValueByMin(time: PrizmTimePickerInternalTime, min: PrizmTime): PrizmTimePickerInternalTime {
    const result = { ...time };
    Compare.isNotNullish(result.hours) && result.hours < min.hours ? (result.hours = min.hours) : null;

    if (result.hours === min.hours && Compare.isNotNullish(result.minutes)) {
      result.minutes < min.minutes ? (result.minutes = min.minutes) : null;
    }

    if (result.minutes === min.minutes && Compare.isNotNullish(result.seconds)) {
      result.seconds < min.seconds ? (result.seconds = min.seconds) : null;
    }

    return result;
  }

  private correctValueByMax(time: PrizmTimePickerInternalTime, max: PrizmTime): PrizmTimePickerInternalTime {
    const result = { ...time };
    Compare.isNotNullish(result.hours) && result.hours > max.hours ? (result.hours = max.hours) : null;

    if (result.hours === max.hours && Compare.isNotNullish(result.minutes)) {
      result.minutes > max.minutes ? (result.minutes = max.minutes) : null;
    }

    if (result.minutes === max.minutes && Compare.isNotNullish(result.seconds)) {
      result.seconds > max.seconds ? (result.seconds = max.seconds) : null;
    }
    return result;
  }
}
