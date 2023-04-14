import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmCronUiHourState } from '../../cron-ui-hour.state';
import { PrizmCronUiBaseType } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-hour',
  styleUrls: ['./hour.component.less', '../../cron-element.component.less'],
  templateUrl: './hour.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronHourComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(public readonly cronUiState: PrizmCronUiHourState) {}
}
