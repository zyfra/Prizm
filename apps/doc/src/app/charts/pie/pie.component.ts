import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSize } from '@prizm-ui/components';
import { PrizmChartsPieItem, PrizmChartsPieOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './pie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieComponent {
  data: PrizmChartsPieItem[] = [
    { type: 'категория один', value: 27 },
    { type: 'вторая категория', value: 25 },
    { type: 'категория три', value: 18 },
    { type: 'четвертая категория', value: 15 },
    { type: 'пятая категория', value: 10 },
    { type: 'другое', value: 5 },
  ];
  colorField = 'type';
  angleField = 'value';
  interactions: PrizmChartsPieOptions['interactions'] = [{ type: 'element-active' }];
  label: PrizmChartsPieOptions['label'] = {
    type: 'inner',
    offset: '-30%',
    content: ({ percent }): any => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  };

  options: Partial<PrizmChartsPieOptions> = {
    appendPadding: 10,
    radius: 0.9,
  };

  width = 400;
  height = 300;
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-pie-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-pie-example.component.html?raw'),
  };
  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
