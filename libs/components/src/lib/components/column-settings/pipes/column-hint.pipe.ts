import { Pipe, PipeTransform } from '@angular/core';
import { PrizmColumnStatus } from '../column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';

@Pipe({
  name: 'prizmColumnHint',
  standalone: true,
})
export class PrizmColumnHintPipe implements PipeTransform {
  public transform(
    translations: PrizmLanguageColumnSettings['columnSettings'],
    status: PrizmColumnStatus,
    isLastColumnShown: boolean
  ): string {
    if (!translations) return '';

    if (isLastColumnShown && status === 'default') return translations.disabledHint;

    if (status === 'sticky') return translations.notHideColumnHint;

    if (status === 'hidden') return translations.showColumnHint;

    return translations.hideColumnHint;
  }
}
