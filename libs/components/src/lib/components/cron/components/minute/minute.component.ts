import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmCronUiMinuteState } from '../../cron-ui-minute.state';
import { PrizmCronUiBaseType } from '../../model';
import { PRIZM_CRON } from '@prizm-ui/components';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-cron-minute',
  styleUrls: ['./minute.component.less', '../../cron-element.component.less'],
  templateUrl: './minute.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronMinuteComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(
    @Inject(PRIZM_CRON) public readonly cronI18n$: Observable<PrizmLanguageCron['cron']>,
    public readonly cronUiState: PrizmCronUiMinuteState
  ) {}
}
