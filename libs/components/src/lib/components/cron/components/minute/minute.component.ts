import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmCronUiMinuteState } from '../../cron-ui-minute.state';

@Component({
  selector: 'prizm-cron-minute',
  styleUrls: ['./minute.component.less', '../../cron-element.component.less'],
  templateUrl: './minute.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronMinuteComponent {
  constructor(public readonly cronUiState: PrizmCronUiMinuteState) {}
}
