import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PzmShadowType, PzmShadowTypeEnum } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-toggle-example',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShadowComponent {
  readonly valueVariants: ReadonlyArray<PzmShadowType> = [
    PzmShadowTypeEnum.miniBottom,
    PzmShadowTypeEnum.miniTop,
    PzmShadowTypeEnum.miniRight,
    PzmShadowTypeEnum.miniLeft,
    PzmShadowTypeEnum.bigTop,
    PzmShadowTypeEnum.bigBottom,
    PzmShadowTypeEnum.bigLeft,
    PzmShadowTypeEnum.bigRight

  ];
  value: PzmShadowType = PzmShadowTypeEnum.bigRight;

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/shadow-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/shadow-base-example.component.html'),
  };
}
