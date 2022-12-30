import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PrizmSize, PrizmThemeService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {
  public data = [
    {
      type: 'Установка 1',
      sales: 38,
    },
    {
      type: 'Установка 2',
      sales: 52,
    },
    {
      type: 'Установка 3',
      sales: 61,
    },
    {
      type: 'Установка 4',
      sales: 145,
    },
    {
      type: 'Установка 5',
      sales: 48,
    },
    {
      type: 'Установка 6',
      sales: 38,
    },
    {
      type: 'Установка 7',
      sales: 38,
    },
    {
      type: 'Установка 8',
      sales: 38,
    },
  ];
  public yField = 'type';
  public xField = 'sales';
  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/prizm-charts-bar-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/prizm-charts-bar-example.component.html'),
  };
  readonly exampleStacked: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/stacked/prizm-charts-stacked-bar-example.component.ts'),
    HTML: import('!!raw-loader!./examples/stacked/prizm-charts-stacked-bar-example.component.html'),
  };
  height = 300;
  width: number = null;

  seriesField: string = null;
  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {
  }
}
