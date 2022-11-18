import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmConfirmPopupOptions,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-confirm-popup-example',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopupComponent {
  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;

  public readonly prizmConfirmPopupDirectionVariants: ReadonlyArray<PrizmConfirmPopupOptions['direction']> = Object.values(PrizmOverlayOutsidePlacement);

  public prizmConfirmPopupDirection: PrizmConfirmPopupOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public prizmConfirmPopupId = 'confirm-id';

  public prizmConfirmPopupShowDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.showDelay;

  public prizmConfirmPopupHideDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.hideDelay;

  public prizmConfirmPopupHost: HTMLElement = null;

  public readonly prizmConfirmPopupVariants = [
    'ConfirmPopup'
  ];

  public prizmConfirmPopup: PolymorphContent =  this.prizmConfirmPopupVariants[0];

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/confirm-popup-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/confirm-popup-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/confirm-popup-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/confirm-popup-with-template-example.component.html'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-component/confirm-popup-with-component-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-component/confirm-popup-with-component-example.component.html'),
  };
}
