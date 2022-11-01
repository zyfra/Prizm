import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
  PZM_HINT_DEFAULT_OPTIONS,
  PzmConfirmPopupOptions,
  PzmOverlayOutsidePlacement,
} from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-confirm-popup-example',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopupComponent {
  public content = 'Тестовое содержимое';
  public pzmAutoReposition = false;

  public readonly pzmConfirmPopupDirectionVariants: ReadonlyArray<PzmConfirmPopupOptions['direction']> = Object.values(PzmOverlayOutsidePlacement);

  public pzmConfirmPopupDirection: PzmConfirmPopupOptions['direction'] = PZM_HINT_DEFAULT_OPTIONS.direction;

  public pzmConfirmPopupId: string = 'confirm-id';

  public pzmConfirmPopupShowDelay: number = PZM_CONFIRM_POPUP_DEFAULT_OPTIONS.showDelay;

  public pzmConfirmPopupHideDelay: number = PZM_CONFIRM_POPUP_DEFAULT_OPTIONS.hideDelay;

  public pzmConfirmPopupHost: HTMLElement = null;

  public readonly pzmConfirmPopupVariants = [
    'ConfirmPopup'
  ];

  public pzmConfirmPopup: PolymorphContent =  this.pzmConfirmPopupVariants[0];

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
