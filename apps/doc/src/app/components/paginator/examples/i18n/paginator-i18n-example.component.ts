import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';
import { of } from 'rxjs';
import { PrizmPaginatorComponent } from '@prizm-ui/components';

export const LINES_SHOWN = 'Показано:';
export const FROM_TEXT = 'от';

@Component({
  selector: 'prizm-paginator-i18n-example',
  templateUrl: './paginator-i18n-example.component.html',
  styleUrls: ['./paginator-i18n-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PrizmPaginatorComponent],
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of({
        // Save all as it was
        ...PRIZM_RUSSIAN_LANGUAGE,
        // Pass updated dictionary
        paginator: {
          linesShown: LINES_SHOWN,
          fromText: FROM_TEXT,
        },
      }),
    },
  ],
})
export class PaginatorI18nExampleComponent {
  public disabled = false;
}
