import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PolymorphContent, ZuiContextWithImplicit, ZuiSizeL, ZuiSizeM } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-toggle-example',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  value = true;
  disabled = false;
  showLoader = false;

  singleColor = false;

  readonly sizeVariants: ReadonlyArray<ZuiSizeL | ZuiSizeM> = [
    'm',
    'l'
  ];
  size: ZuiSizeL | ZuiSizeM = this.sizeVariants[0];

  readonly iconVariants: ReadonlyArray<PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>> = [
    '',
    'selection-checkbox-marked-circle',
    'selection-checkbox-marked-circle-chanel',
    'arrows-chevron-left',
    'arrows-chevron-right'
  ];
  iconOn: PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/toggle-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/toggle-base-example.component.html'),
  };
}
