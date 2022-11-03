import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IconDefs, PrizmAppearance, PrizmAppearanceType, PrizmContent, PrizmSize } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-button-example',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<PrizmContent> = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: PrizmContent = this.iconVariants[0];
  iconRight: PrizmContent = this.iconVariants[0];
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
  showLoader = false;

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/outline/outline-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/outline/outline-buttons-example.component.html'),
  };

  readonly exampleFilled: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/filled/filled-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/filled/filled-buttons-example.component.html'),
  };

  readonly exampleGhost: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/ghost/ghost-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/ghost/ghost-buttons-example.component.html'),
  };

  readonly exampleIcons: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/icons/icons-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/icons/icons-buttons-example.component.html'),
  };
}
