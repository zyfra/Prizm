import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmCronUiHourState } from '../../cron-ui-hour.state';
import { PrizmCronUiBaseType } from '../../model';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';
import { PRIZM_CRON } from '../../../../tokens/i18n';

@Component({
  selector: 'prizm-cron-hour',
  styleUrls: ['./hour.component.less', '../../cron-element.component.less'],
  templateUrl: './hour.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronHourComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(
    @Inject(PRIZM_CRON) public readonly cronI18n$: Observable<PrizmLanguageCron['cron']>,
    public readonly cronUiState: PrizmCronUiHourState
  ) {}
}
