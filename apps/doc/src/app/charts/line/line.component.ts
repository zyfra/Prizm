import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IconDefs, PrizmAppearance, PrizmAppearanceType, PrizmContent, PrizmSize } from '@prizm-ui/components';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/prizm-charts-line-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/prizm-charts-line-example.component.html'),
  };

}
