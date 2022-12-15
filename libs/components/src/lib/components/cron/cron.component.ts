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
import { PrizmCronTabItem } from './model';

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
    PrizmCronUiYearState,
    PrizmCronUiMinuteState
  ],
})
export class PrizmCronComponent implements OnInit {
  @Input() set value(value: string) {
    this.cron.updateWith(value);
  };
  get value(): string {
    return this.cron.valueAsString;
  }
  @Output() valueChange = new EventEmitter<string>();
  @Output() selectedChange = new EventEmitter<PrizmCronTabItem>();

  @Input()
  set selected(selected: PrizmCronTabItem) {
    this.selectedSwitcherIdx = this.switchers.findIndex(
      i => i.id === selected
    )
  };

  @Input() set tabs(tabs: PrizmCronTabItem[]) {
    this.switchers = this.switchers.map(
      i => {
        i.hide = !tabs.includes(i.id);
        return i;
      }
    );

    if (tabs.length && !tabs.includes(this.selected)) {
      this.selectedChange.emit(this.selected = tabs[0]);
    }
  };

  public switchers: PrizmSwitcherItem<PrizmCronTabItem>[] = [
    {
      title: 'Секунды',
      id: 'second'
    },
    {
      title: 'Минуты',
      id: 'minute'
    },
    {
      title: 'Часы',
      id: 'hour'
    },
    {
      title: 'Дни',
      id: 'day'
    },
    {
      title: 'Месяцы',
      id: 'month'
    },
    {
      title: 'Годы',
      id: 'year'
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
  ) {
  }

  public ngOnInit(): void {
    this.cronUiSecondState.init();
    this.cronUiHourState.init();
    this.cronUiMonthState.init();
    this.cronUiYearState.init();
    this.cronUiMinuteState.init();
    this.initEndDateStateChanger();
  }

  private initEndDateStateChanger(): void {
    this.indefinitelyControl.valueChanges.pipe(
      tap(
        (value) => {
          if (value)
            this.endDateControl.disable()
          else
            this.endDateControl.enable()
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public submit(): void {
    this.cron.valueAsString$.pipe(
      tap(
        (val) => this.valueChange.emit(val)
      ),
      first(),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  public copy(): void {
    // TODO safe with injection
    navigator.clipboard.writeText(
      this.cron.valueAsString
    )
  }

  public indexChanged(index: number): void {
    const selected = this.switchers.find(
      (_, i) => i === index
    );
    this.selectedChange.emit(
      this.selected = selected.id
    );
  }
}
