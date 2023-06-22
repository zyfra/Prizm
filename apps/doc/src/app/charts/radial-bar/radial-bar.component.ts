import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmChartsRadialBarItem, PrizmChartsRadialBarOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-ridal-bar-example',
  templateUrl: './radial-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialBarComponent {
  public width = 400;
  public height = 300;
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-radial-bar-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-radial-bar-example.component.html?raw'),
  };

  public data: PrizmChartsRadialBarItem[] = [
    { name: 'X6', star: 297 },
    { name: 'G', star: 506 },
    { name: 'AVA', star: 805 },
    { name: 'G2Plot', star: 1478 },
    { name: 'L7', star: 2029 },
    { name: 'G6', star: 7100 },
    { name: 'F2', star: 7346 },
    { name: 'G2', star: 10178 },
  ];
  public xField = 'name';
  public yField = 'star';

  public options: Partial<PrizmChartsRadialBarOptions> = {
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum): any => {
        return { name: 'star', value: datum.star };
      },
    },
  };
  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
