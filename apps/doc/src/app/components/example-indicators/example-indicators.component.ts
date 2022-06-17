import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-example-indicators',
  templateUrl: './example-indicators.component.html',
  styleUrls: ['./example-indicators.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleIndicatorsComponent {
  public readonly indicatorBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../example-indicators/examples/indicators-base/indicators-base.component'),
    HTML: import('!!raw-loader!../example-indicators/examples/indicators-base/indicators-base.component.html'),
    LESS: import('!!raw-loader!../example-indicators/examples/indicators-base/indicators-base.component.less'),
  };

  public readonly indicatorIconExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../example-indicators/examples/indicators-icons/indicators-icons.component'),
    HTML: import('!!raw-loader!../example-indicators/examples/indicators-icons/indicators-icons.component.html'),
    LESS: import('!!raw-loader!../example-indicators/examples/indicators-icons/indicators-icons.component.less'),
  };
}
