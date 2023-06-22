import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmCronUiMinuteState } from '../../cron-ui-minute.state';
import { PrizmCronUiBaseType } from '../../model';

@Component({
  selector: 'prizm-cron-minute',
  styleUrls: ['./minute.component.less', '../../cron-element.component.less'],
  templateUrl: './minute.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronMinuteComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(public readonly cronUiState: PrizmCronUiMinuteState) {}
}
