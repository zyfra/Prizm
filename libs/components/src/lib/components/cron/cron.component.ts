import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { ISwitcher } from '../switcher';
import { FormControl } from '@angular/forms';
import { PrizmCronService } from '../../services';
import { PrizmCronUiService } from './cron-ui.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-cron',
  styleUrls: ['./cron.component.less'],
  templateUrl: './cron.component.html',
  exportAs: 'prizmCron',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    PrizmCronService,
    PrizmCronUiService,
  ],
})
export class PrizmCronComponent {
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
    private readonly cron: PrizmCronService
  ) {
  }

  public submit() {
    this.cron.valueAsString$.pipe(
      tap(
        (val) => this.valueChange.emit(val)
      ),
      take(1)
    ).subscribe()
  }
}
