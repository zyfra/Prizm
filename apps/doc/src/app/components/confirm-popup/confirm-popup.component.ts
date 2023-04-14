import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmConfirmPopupOptions,
  PrizmOverlayOutsidePlacement,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmContent,
  IconDefs,
  PrizmDialogSize,
  PrizmSize,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-confirm-popup-example',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPopupComponent {
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  size: PrizmDialogSize = this.sizeVariants[0];
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = [
    '',
    ...IconDefs.reduce((a, c) => a.concat(c.data), []),
  ];
  icon: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  iconRight: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  showLoader = false;

  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;

  public readonly prizmConfirmPopupDirectionVariants: ReadonlyArray<PrizmConfirmPopupOptions['direction']> =
    Object.values(PrizmOverlayOutsidePlacement);

  public prizmConfirmPopupDirection: PrizmConfirmPopupOptions['direction'] =
    PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public prizmConfirmPopupId = 'confirm-id';

  public prizmConfirmPopupShowDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.showDelay;

  public prizmConfirmPopupHideDelay: number = PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS.hideDelay;

  public prizmConfirmPopupHost: HTMLElement = null;

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
