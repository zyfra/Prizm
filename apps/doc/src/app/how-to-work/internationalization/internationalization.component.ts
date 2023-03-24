import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent } from '@prizm-ui/doc';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-for-developers',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternationalizationComponent {
  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
const a = PRIZM_LANGUAGE,
  b = PRIZM_RUSSIAN_LANGUAGE;
