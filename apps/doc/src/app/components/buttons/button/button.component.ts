import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IconDefs, ZuiAppearance, ZuiAppearanceType, ZuiContent, ZuiSize } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-button-example',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  sizeVariants: ReadonlyArray<ZuiSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: ZuiSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<ZuiContent> = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: ZuiContent = this.iconVariants[0];
  iconRight: ZuiContent = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<ZuiAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: ZuiAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<ZuiAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: ZuiAppearanceType = this.appearanceTypeVariants[0];
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
