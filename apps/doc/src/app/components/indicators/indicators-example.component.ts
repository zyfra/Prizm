import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { IndicatorStatus, IndicatorType } from '@prizm-ui/components';

@Component({
  selector: 'prizm-example-indicators',
  templateUrl: './indicators-example.component.html',
  styleUrls: ['./indicators-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorsExampleComponent {
  public type: IndicatorType = 'simple';
  public status: IndicatorStatus = 'info';
  public readonly typeVariants: IndicatorType[] = ['simple', 'icon'];
  public readonly statusVariants: IndicatorStatus[] = ['info', 'secondary', 'success', 'warning', 'danger'];

  public readonly indicatorBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/indicators-basic-example/indicators-basic-example.component'),
    HTML: import('!!raw-loader!./examples/indicators-basic-example/indicators-basic-example.component.html'),
    LESS: import('./examples/indicators-basic-example/indicators-basic-example.component.less?raw'),
  };

  public readonly indicatorIconExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/indicators-with-icon-example/indicators-with-icon-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/indicators-with-icon-example/indicators-with-icon-example.component.html'
    ),
    LESS: import('./examples/indicators-with-icon-example/indicators-with-icon-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
