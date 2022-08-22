import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiShadowType, ZuiShadowTypeEnum } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-card-example',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  readonly shadowVariants: ReadonlyArray<ZuiShadowType> = [
    ZuiShadowTypeEnum.miniBottom,
    ZuiShadowTypeEnum.miniTop,
    ZuiShadowTypeEnum.miniRight,
    ZuiShadowTypeEnum.miniLeft,
    ZuiShadowTypeEnum.bigTop,
    ZuiShadowTypeEnum.bigBottom,
    ZuiShadowTypeEnum.bigLeft,
    ZuiShadowTypeEnum.bigRight,
    ZuiShadowTypeEnum.bigRight,

  ];
  shadow: ZuiShadowType = ZuiShadowTypeEnum.miniBottom;
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/card-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/card-base-example.component.html'),
  };
}
