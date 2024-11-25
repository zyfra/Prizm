import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmAppearance, PrizmAppearanceType, PrizmSize } from '@prizm-ui/components';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';
import { prizmIconsFullProvideLazyLoader } from '@prizm-ui/icons-loader/full';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsFullProvideLazyLoader()],
})
export class ButtonComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  public pseudoHovered: null | boolean = null;
  public pseudoHoveredVariants = [true, false, null];
  public pseudoPressed: null | boolean = false;
  public pseudoFocused: null | boolean = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;
  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = ['', ...PRIZM_ICONS_NAMES];
  testIdPostfix!: string;
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
  content = 'Button Name';
  minWidth = 'unset';
  showLoader = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/outline/outline-buttons-example.component.ts?raw'),
    HTML: import('./examples/outline/outline-buttons-example.component.html?raw'),
  };

  readonly exampleFilled: TuiDocExample = {
    TypeScript: import('./examples/filled/filled-buttons-example.component.ts?raw'),
    HTML: import('./examples/filled/filled-buttons-example.component.html?raw'),
  };

  readonly exampleGhost: TuiDocExample = {
    TypeScript: import('./examples/ghost/ghost-buttons-example.component.ts?raw'),
    HTML: import('./examples/ghost/ghost-buttons-example.component.html?raw'),
  };

  readonly exampleIcons: TuiDocExample = {
    TypeScript: import('./examples/icons/icons-buttons-example.component.ts?raw'),
    HTML: import('./examples/icons/icons-buttons-example.component.html?raw'),
  };

  readonly exampleCounter: TuiDocExample = {
    TypeScript: import('./examples/counter/button-with-counter-example.component.ts?raw'),
    HTML: import('./examples/counter/button-with-counter-example.component.html?raw'),
  };

  readonly exampleOverflow: TuiDocExample = {
    TypeScript: import('./examples/overflow/button-text-overflow-example.component.ts?raw'),
    HTML: import('./examples/overflow/button-text-overflow-example.component.html?raw'),
  };
}
