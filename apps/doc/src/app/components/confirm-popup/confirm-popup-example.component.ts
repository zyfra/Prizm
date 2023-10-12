import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmConfirmPopupOptions,
  PrizmDialogSize,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-confirm-popup-example',
  templateUrl: './confirm-popup-example.component.html',
  styleUrls: ['./confirm-popup-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPopupExampleComponent {
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  size: PrizmDialogSize = this.sizeVariants[0];

  public readonly prizmConfirmPopupDirectionVariants: ReadonlyArray<PrizmConfirmPopupOptions['direction']> =
    Object.values(PrizmOverlayOutsidePlacement);

  public prizmConfirmPopupDirection: PrizmConfirmPopupOptions['direction'] =
    PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public readonly prizmConfirmPopupThemeVariants: ReadonlyArray<PrizmConfirmPopupOptions['theme']> = [
    null,
    'dark',
    'light',
  ];
  public prizmConfirmPopupTheme: PrizmConfirmPopupOptions['theme'] =
    PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.theme;

  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;

  public prizmConfirmPopupId = 'confirm-id';

  public prizmConfirmPopupShowDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.showDelay;

  public prizmConfirmPopupHideDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.hideDelay;

  public prizmConfirmPopupHost: HTMLElement | null = null;

  public readonly prizmConfirmPopupVariants = ['ConfirmPopup'];

  public prizmConfirmPopup: PolymorphContent = this.prizmConfirmPopupVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/confirm-popup-base-example.component.ts?raw'),
    HTML: import('./examples/base/confirm-popup-base-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/confirm-popup-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/confirm-popup-with-template-example.component.html?raw'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('./examples/with-component/confirm-popup-with-component-example.component.ts?raw'),
    HTML: import('./examples/with-component/confirm-popup-with-component-example.component.html?raw'),
  };
}
