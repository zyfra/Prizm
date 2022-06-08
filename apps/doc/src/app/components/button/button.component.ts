import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {ZuiSize, ZuiContent, ZuiAppearance, ZuiAppearanceType} from "@digital-plant/zui-components";
import {ALL_ICONS} from "../icon/examples/mock";

@Component({
  selector: 'zui-button-example',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  sizeVariants: ReadonlyArray<ZuiSize> = [
    's',
    'm',
    'xm',
    'l',
    'xl',
  ];
  size: ZuiSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<ZuiContent> = [
    '',
    ...ALL_ICONS
  ];
  icon: ZuiContent = this.iconVariants[0];
  iconRight: ZuiContent = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<ZuiAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'disabled'
  ];
  appearance: ZuiAppearance = this.appearanceVariants[0];


  appearanceTypeVariants: ReadonlyArray<ZuiAppearanceType> = [
    'fill',
    'outline',
    'ghost',
  ];
  appearanceType: ZuiAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  content = 'Button Name';
  showLoader = false;

  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
  );

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/2/template.ts'),
    HTML: import('!!raw-loader!./examples/2/template.html'),
  };

  readonly example2: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };

  readonly example3: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/3/template.ts'),
    HTML: import('!!raw-loader!./examples/3/template.html'),
  };

  readonly example4: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/4/template.ts'),
    HTML: import('!!raw-loader!./examples/4/template.html'),
  };

  readonly example5: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/5/template.ts'),
    HTML: import('!!raw-loader!./examples/5/template.html'),
  };
}
