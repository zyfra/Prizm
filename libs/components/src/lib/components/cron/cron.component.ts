import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSwitcherItem } from '../switcher';
import { FormControl } from '@angular/forms';
import { PrizmCronService } from '../../services';
import { first, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiSecondState } from './cron-ui-second.state';
import { PrizmCronUiMinuteState } from './cron-ui-minute.state';
import { PrizmCronUiHourState } from './cron-ui-hour.state';
import { PrizmCronUiMonthState } from './cron-ui-month.state';
import { PrizmCronUiYearState } from './cron-ui-year.state';
import { prizmIsTextOverflow } from '../../util';
import { PrizmCronPeriod, PrizmCronTabItem } from './model';
import { PrizmCronUiDayState } from './cron-ui-day.state';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: 'prizm-cron',
  styleUrls: ['./cron.component.less'],
  templateUrl: './cron.component.html',
  exportAs: 'prizmCron',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    PrizmCronService,
    PrizmCronUiSecondState,
    PrizmCronUiMonthState,
    PrizmCronUiHourState,
    PrizmCronUiDayState,
    PrizmCronUiYearState,
    PrizmCronUiMinuteState,
  ],
})
export class PrizmCronComponent implements OnInit {
  @Input() public set value(value: string) {
    this.cron.updateWith(value);
  }
  public get value(): string {
    return this.cron.valueAsString;
  }

  @Input()
  @prizmDefaultProp()
  disabled = false;

  @Input()
  @prizmDefaultProp()
  public set period(period: PrizmCronPeriod) {
    this.indefinitelyControl.setValue(period.indefinitely);
    this.startDateControl.setValue(period.start);
    this.endDateControl.setValue(period.start);
    this.endDateStateCorrector();
  }
  public get period(): PrizmCronPeriod {
    return {
      indefinitely: this.indefinitelyControl.value,
      start: this.startDateControl.value,
      end: this.indefinitelyControl.value ? null : this.endDateControl.value,
    };
  }

  @Output() valueChange = new EventEmitter<string>();
  @Output() periodChange = new EventEmitter<PrizmCronPeriod>();
  @Output() selectedChange = new EventEmitter<PrizmCronTabItem>();

  @Input()
  set selected(selected: PrizmCronTabItem) {
    this.selectedSwitcherIdx = this.switchers.findIndex(i => i.id === selected);
  }

  @Input() set tabs(tabs: PrizmCronTabItem[]) {
    this.switchers = this.switchers.map(i => {
      i.hide = !tabs.includes(i.id);
      return i;
    });

    if (tabs.length && !tabs.includes(this.selected)) {
      this.selectedChange.emit((this.selected = tabs[0]));
    }
  }

  public switchers: PrizmSwitcherItem<PrizmCronTabItem>[] = [
    {
      title: 'Секунды',
      id: 'second',
    },
    {
      title: 'Минуты',
      id: 'minute',
    },
    {
      title: 'Часы',
      id: 'hour',
    },
    {
      title: 'Дни',
      id: 'day',
    },
    {
      title: 'Месяцы',
      id: 'month',
    },
    {
      title: 'Годы',
      id: 'year',
    },
  ];

  public readonly value$ = this.cron.value$;
  public readonly valueAsString$ = this.cron.valueAsString$;
  public readonly startDateControl = new FormControl();
  public readonly endDateControl = new FormControl();
  public readonly indefinitelyControl = new FormControl(false);
  public indefinitely = false;
  public selectedSwitcherIdx = 0;
  public readonly prizmIsTextOverflow = prizmIsTextOverflow;

  constructor(
    public readonly cron: PrizmCronService,
    private readonly destroy$: PrizmDestroyService,
    private readonly cronUiSecondState: PrizmCronUiSecondState,
    private readonly cronUiHourState: PrizmCronUiHourState,
    private readonly cronUiYearState: PrizmCronUiYearState,
    private readonly cronUiMonthState: PrizmCronUiMonthState,
    private readonly cronUiMinuteState: PrizmCronUiMinuteState,
    private readonly cronUiDayState: PrizmCronUiDayState
  ) {}

  public ngOnInit(): void {
    this.cronUiSecondState.init();
    this.cronUiHourState.init();
    this.cronUiDayState.init();
    this.cronUiMonthState.init();
    this.cronUiYearState.init();
    this.cronUiMinuteState.init();
    this.initEndDateStateChanger();
  }

  private endDateStateCorrector(): void {
    if (this.indefinitelyControl.value) this.endDateControl.disable();
    else this.endDateControl.enable();
  }

  private initEndDateStateChanger(): void {
    this.indefinitelyControl.valueChanges
      .pipe(
        tap(() => this.endDateStateCorrector()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private emitPeriod(): void {
    this.periodChange.emit(this.period);
  }

  public submit(): void {
    this.cron.valueAsString$
      .pipe(
        tap(val => {
          this.valueChange.emit(val);
          this.emitPeriod();
        }),
        first(),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public copy(): void {
    // TODO safe with injection
    navigator.clipboard.writeText(this.cron.valueAsString);
  }

  public indexChanged(index: number): void {
    const selected = this.switchers.find((_, i) => i === index);
    this.selectedChange.emit((this.selected = selected.id));
  }
}
