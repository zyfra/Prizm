import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorpheusContent,
  ZuiContextWithImplicit,
  ZuiShadowType,
  ZuiShadowTypeEnum,
  ZuiSizeL,
  ZuiSizeM,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-toggle-example',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShadowComponent {
  readonly valueVariants: ReadonlyArray<ZuiShadowType> = [
    ZuiShadowTypeEnum.miniBottom,
    ZuiShadowTypeEnum.miniTop,
    ZuiShadowTypeEnum.miniRight,
    ZuiShadowTypeEnum.miniLeft,
    ZuiShadowTypeEnum.bigTop,
    ZuiShadowTypeEnum.bigBottom,
    ZuiShadowTypeEnum.bigLeft,
    ZuiShadowTypeEnum.bigRight

  ];
  value: ZuiShadowType = ZuiShadowTypeEnum.bigRight;

  readonly iconVariants: ReadonlyArray<PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>> = [
    '',
    'selection-checkbox-marked-circle',
    'selection-checkbox-marked-circle-chanel',
    'arrows-chevron-left',
    'arrows-chevron-right'
  ];
  iconOn: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  iconOff: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/shadow-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/shadow-base-example.component.html'),
  };
}
