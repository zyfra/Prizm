import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiMonthState } from '../../cron-ui-month.state';
import { PrizmCronUiBaseType } from '../../model';
import { PRIZM_CALENDAR_MONTHS, PRIZM_CRON, PRIZM_MONTHS } from '../../../../tokens/i18n';
import { Observable } from 'rxjs';
import { PrizmLanguageCore, PrizmLanguageCron, PrizmLanguageKit } from '@prizm-ui/i18n';

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
    @Inject(PRIZM_MONTHS) public readonly monthsI18n$: Observable<PrizmLanguageCore['months']>,
    @Inject(PRIZM_CALENDAR_MONTHS)
    public readonly shortMonthsI18n$: Observable<PrizmLanguageKit['shortCalendarMonths']>,
    public readonly cronUiState: PrizmCronUiMonthState
  ) {}
}
