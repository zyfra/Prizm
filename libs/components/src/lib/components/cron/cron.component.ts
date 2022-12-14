import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { ISwitcher } from '../switcher';
import { FormControl } from '@angular/forms';
import { PrizmCronService } from '../../services';
import { first, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiSecondState } from './cron-ui-second.state';
import { PrizmCronUiMinuteState } from './cron-ui-minute.state';
import { PrizmCronUiHourState } from './cron-ui-hour.state';
import { PrizmCronUiMonthState } from './cron-ui-month.state';

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
    PrizmCronUiMinuteState
  ],
})
export class PrizmCronComponent implements OnInit {
  public readonly switchers: ISwitcher[] = [
    {
      title: 'Секунды',
    },
    {
      title: 'Минуты',
    },
    {
      title: 'Часы',
    },
    {
      title: 'Дни',
    },
    {
      title: 'Месяцы',
    },
    {
      title: 'Годы',
    },
  ];

  @Output() valueChange = new EventEmitter<string>();

  public readonly value$ = this.cron.value$;
  public readonly valueAsString$ = this.cron.valueAsString$;
  public readonly startDateControl = new FormControl();
  public readonly endDateControl = new FormControl();
  public indefinitely = false;
  public selectedSwitcherIdx = 0;

  constructor(
    private readonly cron: PrizmCronService,
    private readonly destroy$: PrizmDestroyService,
    private readonly cronUiSecondState: PrizmCronUiSecondState,
    private readonly cronUiHourState: PrizmCronUiHourState,
    private readonly cronUiMonthState: PrizmCronUiMonthState,
    private readonly cronUiMinuteState: PrizmCronUiMinuteState,
  ) {
  }

  public ngOnInit(): void {
    this.cronUiSecondState.init();
    this.cronUiHourState.init();
    this.cronUiMonthState.init();
    this.cronUiMinuteState.init();
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
}
