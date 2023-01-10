import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiMonthState } from '../../cron-ui-month.state';


@Component({
  selector: 'prizm-cron-month',
  styleUrls: [
    './month.component.less',
    '../../cron-element.component.less'
  ],
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronMonthComponent {
  constructor(
    public readonly cronUiState: PrizmCronUiMonthState
  ) {}
}
