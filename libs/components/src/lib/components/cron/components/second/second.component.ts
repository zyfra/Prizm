import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiSecondState } from '../../cron-ui-second.state';
import { PrizmCronUiBaseType } from '../../model';

@Component({
  selector: 'prizm-cron-second',
  styleUrls: ['./second.component.less', '../../cron-element.component.less'],
  templateUrl: './second.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmCronSecondComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(public readonly cronUiState: PrizmCronUiSecondState) {}
}
