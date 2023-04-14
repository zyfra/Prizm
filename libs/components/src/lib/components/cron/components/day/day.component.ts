import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiDayState } from '../../cron-ui-day.state';
import { PrizmCronUiDayType } from '../../model';

@Component({
  selector: 'prizm-cron-day',
  styleUrls: ['./day.component.less', '../../cron-element.component.less'],
  templateUrl: './day.component.html',
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronDayComponent {
  @Input() specifiedList: PrizmCronUiDayType[] = [];
  constructor(public readonly cronUiState: PrizmCronUiDayState) {}
}
