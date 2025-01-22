import { Component, inject } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';
import { prizmI18nInitWithKey, PrizmLanguageDialogs } from '@prizm-ui/i18n';
import { PRIZM_DIALOG_KIT } from '../../tokens';
import { Observable } from 'rxjs';

@Component({
  selector: 'prizm-confirm-popup-container',
  templateUrl: './confirm-popup-container.component.html',
  styleUrls: ['./confirm-popup-container.component.less'],
  providers: [PrizmDestroyService, ...prizmI18nInitWithKey(PRIZM_DIALOG_KIT, 'dialog')],
})
export class PrizmConfirmPopupContainerComponent extends PrizmHintContainerComponent<any> {
  public readonly dictionary$: Observable<PrizmLanguageDialogs['dialog']> = inject(PRIZM_DIALOG_KIT);
}
