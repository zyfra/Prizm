import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiDayState } from '../../cron-ui-day.state';
import { PrizmCronUiDayType } from '../../model';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';
import { PRIZM_CRON } from '../../../../tokens/i18n';
import { PrizmI18nService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-day',
  styleUrls: ['./day.component.less', '../../cron-element.component.less'],
  templateUrl: './day.component.html',
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronDayComponent {
  @Input() specifiedList: PrizmCronUiDayType[] = [];
  constructor(
    @Inject(PRIZM_CRON) public readonly cronI18n$: Observable<PrizmLanguageCron['cron']>,
    public readonly i18n: PrizmI18nService,
    public readonly cronUiState: PrizmCronUiDayState
  ) {}
}
