import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, signal } from '@angular/core';
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
import { PrizmTimePaginationMode } from '../internal/primitive-time-pagination/types/types';
import { PrizmTimePickerTime } from './types/types';
import { PrizmPikcerDisablePipe } from './pipes/picker-disable.pipe';
import { PrizmTimeSheetPipe } from './pipes/time-sheet.pipe';

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
    PrizmPikcerDisablePipe,
    PrizmButtonComponent,
  ],
  providers: [...prizmI18nInitWithKey(PRIZM_TIME_PICKER, 'timePicker')],
})
export class PrizmTimePickerComponent extends PrizmAbstractTestId {
  @Output()
  readonly timeChanged = new EventEmitter<PrizmTime>();

  @Output()
  readonly canceled = new EventEmitter<void>();

  // TODO: add input
  public timeSheetMode = signal<PrizmTimePaginationMode>('hour');
  public currentTime = signal<PrizmTime | undefined>(undefined);
  public internalTime = signal<PrizmTimePickerTime>({});
  override readonly testId_ = 'ui_time_picker';

  constructor(
    @Inject(PRIZM_TIME_PICKER)
    public readonly dictionary$: Observable<PrizmLanguageTimePicker['timePicker']>
  ) {
    super();
  }

  public timeClicked(time: number) {
    const internalTime = { ...this.internalTime() };
    internalTime[this.timeSheetMode()] = time;
    this.internalTime.set(internalTime);
  }

  public setValue() {
    const time = { ...this.internalTime() };

    this.currentTime.set(new PrizmTime(time.hour ?? 0, time.minute ?? 0, time.second ?? 0));

    this.updateinternalTime(this.currentTime());

    this.timeChanged.emit(this.currentTime());
  }

  public cancel() {
    this.canceled.emit();
  }

  private updateinternalTime(time: PrizmTime | undefined) {
    if (!time) return;
    this.internalTime.set({
      hour: time.hours,
      minute: time.minutes,
      second: time.seconds,
    });
  }
}
