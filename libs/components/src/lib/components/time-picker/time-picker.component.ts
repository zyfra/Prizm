import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  input,
  Output,
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
import { PrizmBooleanHandler } from '../../types';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants';
import { PrizmPickerDisablePipe } from './pipes/picker-disable.pipe';

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
  @Output()
  readonly timeChanged = new EventEmitter<PrizmTime>();

  @Output()
  readonly canceled = new EventEmitter<void>();

  @Input() set time(value: PrizmTime | undefined) {
    this.updateinternalTime(value);
  }

  public timeMode = input<'HH:MM' | 'HH:MM:SS'>('HH:MM:SS');
  public minTime = input<PrizmTime>();
  public maxTime = input<PrizmTime>();

  public disabledItemHandler = input<PrizmBooleanHandler<PrizmTime>>(PRIZM_ALWAYS_FALSE_HANDLER);

  public timeSheetState = signal<PrizmTimePaginationState>('hours');

  public internalTime = signal<PrizmTimePickerInternalTime>({});

  override readonly testId_ = 'ui_time_picker';

  constructor(
    @Inject(PRIZM_TIME_PICKER)
    public readonly dictionary$: Observable<PrizmLanguageTimePicker['timePicker']>
  ) {
    super();
  }

  public timeClicked(time: number) {
    const internalTime = { ...this.internalTime() };
    internalTime[this.timeSheetState()] = time;
    this.internalTime.set(internalTime);
  }

  public setValue() {
    const time = { ...this.internalTime() };
    const a = new PrizmTime(time.hours ?? 0, time.minutes ?? 0, time.seconds ?? 0);

    this.updateinternalTime(a);
    this.timeChanged.emit(a);
  }

  public cancel() {
    this.internalTime.set({});
    this.canceled.emit();
  }

  private updateinternalTime(time: PrizmTime | undefined) {
    if (!time) return;
    this.internalTime.set({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });
  }
}
