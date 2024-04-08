import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiMonthState } from '../../cron-ui-month.state';
import { PrizmCronUiBaseType } from '../../model';
import { PRIZM_CRON } from '@prizm-ui/components';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-cron-month',
  styleUrls: ['./month.component.less', '../../cron-element.component.less'],
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmCronMonthComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  constructor(
    @Inject(PRIZM_CRON) public readonly cronI18n$: Observable<PrizmLanguageCron['cron']>,
    public readonly cronUiState: PrizmCronUiMonthState
  ) {}
}
