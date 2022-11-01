import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IconDefs, PzmAppearance, PzmAppearanceType, PzmContent, PzmSize } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-icon-button-example',
  templateUrl: './icon-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {

          display: flex;
          gap: 1rem;
        }
      }
    `
  ]
})
export class IconButtonComponent {
  sizeVariants: ReadonlyArray<PzmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PzmSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<PzmContent> = ['account-card-details', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: PzmContent = this.iconVariants[0];
  iconRight: PzmContent = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PzmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PzmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PzmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PzmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  content = 'Button Name';
  showLoader = false;

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleIcons: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/icons/icons-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/icons/icons-buttons-example.component.html'),
  };
}
