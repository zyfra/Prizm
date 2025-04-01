import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';
import { prizmI18nInitWithKey, PrizmLanguageNoneContent } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PRIZM_NONE_CONTENT } from '../../tokens';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'prizm-none-content',
  templateUrl: './none-content.component.html',
  styleUrls: ['./none-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
  providers: [...prizmI18nInitWithKey(PRIZM_NONE_CONTENT, 'noneContent')],
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
})
export class PrizmNoneContentComponent {
  public readonly dictionary$: Observable<PrizmLanguageNoneContent['noneContent']> =
    inject(PRIZM_NONE_CONTENT);
  private readonly testIdDirective = inject(PrizmTestIdDirective, { host: true });

  constructor() {
    this.testIdDirective.generateMainTestId = 'ui_none-content';
  }
}
