import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
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
    TypeScript: import('./examples/indicators-basic-example/indicators-basic-example.component?raw'),
    HTML: import('./examples/indicators-basic-example/indicators-basic-example.component.html?raw'),
    LESS: import('./examples/indicators-basic-example/indicators-basic-example.component.less?raw'),
  };

  public readonly indicatorIconExample: TuiDocExample = {
    TypeScript: import('./examples/indicators-with-icon-example/indicators-with-icon-example.component?raw'),
    HTML: import('./examples/indicators-with-icon-example/indicators-with-icon-example.component.html?raw'),
    LESS: import('./examples/indicators-with-icon-example/indicators-with-icon-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
