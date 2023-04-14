import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiMonthState } from '../../cron-ui-month.state';
import { PrizmCronUiBaseType } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-month',
  styleUrls: ['./month.component.less', '../../cron-element.component.less'],
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmCronMonthComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(public readonly cronUiState: PrizmCronUiMonthState) {}
}
