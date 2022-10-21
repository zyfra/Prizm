import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS,
  ZUI_HINT_DEFAULT_OPTIONS,
  ZuiConfirmPopupOptions,
  ZuiOverlayOutsidePlacement,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-confirm-popup-example',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopupComponent {
  public content = 'Тестовое содержимое';
  public zuiAutoReposition = false;

  public readonly zuiConfirmPopupDirectionVariants: ReadonlyArray<ZuiConfirmPopupOptions['direction']> = Object.values(ZuiOverlayOutsidePlacement);

  public zuiConfirmPopupDirection: ZuiConfirmPopupOptions['direction'] = ZUI_HINT_DEFAULT_OPTIONS.direction;

  public zuiConfirmPopupId: string = 'confirm-id';

  public zuiConfirmPopupShowDelay: number = ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS.showDelay;

  public zuiConfirmPopupHideDelay: number = ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS.hideDelay;

  public zuiConfirmPopupHost: HTMLElement = null;

  public readonly zuiConfirmPopupVariants = [
    'ConfirmPopup'
  ];

  public zuiConfirmPopup: PolymorphContent =  this.zuiConfirmPopupVariants[0];

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
