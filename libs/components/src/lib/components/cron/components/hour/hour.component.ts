import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmCronUiHourState } from '../../cron-ui-hour.state';


@Component({
  selector: 'prizm-cron-hour',
  styleUrls: [
    './hour.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './hour.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizmCronHourComponent {
  constructor(
    public readonly cronUiState: PrizmCronUiHourState
  ) {
  }
}
