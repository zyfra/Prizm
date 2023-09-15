import { Component } from '@angular/core';
import { PrizmCronPeriod } from '@prizm-ui/components';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';
import { of } from 'rxjs';

@Component({
  selector: 'prizm-cron-i18n-example',
  templateUrl: './cron-i18n-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of({
        ...PRIZM_RUSSIAN_LANGUAGE,
        cron: {
          ...PRIZM_RUSSIAN_LANGUAGE.cron,
          title: '',
          startDateLabel: 'Дата начала события',
          endDateLabel: 'Дата окончания события',
        },
      }),
    },
  ],
})
export class PrizmCronI18nExampleComponent {
  public value = true;
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
