import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmShadowType, PrizmShadowTypeEnum } from '@prizm-ui/components';

@Component({
  selector: 'prizm-toggle-example',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowComponent {
  readonly valueVariants: ReadonlyArray<PrizmShadowType> = [
    PrizmShadowTypeEnum.miniBottom,
    PrizmShadowTypeEnum.miniTop,
    PrizmShadowTypeEnum.miniRight,
    PrizmShadowTypeEnum.miniLeft,
    PrizmShadowTypeEnum.bigTop,
    PrizmShadowTypeEnum.bigBottom,
    PrizmShadowTypeEnum.bigLeft,
    PrizmShadowTypeEnum.bigRight,
  ];
  value: PrizmShadowType = PrizmShadowTypeEnum.bigRight;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/shadow-base-example.component.ts?raw'),
    HTML: import('./examples/base/shadow-base-example.component.html?raw'),
  };
}
