import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiAppearance, ZuiAppearanceType, ZuiContent, ZuiSize } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-split-button-example',
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
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
  `]
})
export class SplitButtonComponent {
  sizeVariants: ReadonlyArray<ZuiSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: ZuiSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<ZuiContent> = ['chevrons-dropdown', ''];
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


  readonly exampleSplit: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/split/split-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/split/split-buttons-example.component.html'),
  };
}
