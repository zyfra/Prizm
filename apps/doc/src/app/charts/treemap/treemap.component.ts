import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSize } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './treemap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreemapComponent {
  public data = {
    name: 'root',
    children: [
      { name: 'Категория 1', value: 560 },
      { name: 'Категория 2', value: 500 },
      { name: 'Категория 3', value: 150 },
      { name: 'Категория 4', value: 140 },
      { name: 'Категория 5', value: 115 },
      { name: 'Категория 6', value: 95 },
      { name: 'Категория 7', value: 90 },
      { name: 'Категория 8', value: 75 },
      { name: 'Категория 9', value: 98 },
      { name: 'Категория 10', value: 60 },
      { name: 'Категория 11', value: 45 },
      { name: 'Категория 12', value: 40 },
      { name: 'Категория 13', value: 40 },
      { name: 'категория 14', value: 35 },
      { name: 'Категория 15', value: 40 },
      { name: 'Категория 16', value: 40 },
      { name: 'Категория 17', value: 40 },
      { name: 'Категория 18', value: 30 },
      { name: 'категория 19', value: 28 },
      { name: 'категория 20', value: 16 },
    ],
  };
  public colorField = 'name';
  public colorVariants = [
    '',
    ['red', 'blue', 'green', 'yellow'],
    ['#b07e9f', '#7dbbb0', '#a37c18', '#e7bee6', '#396878', '#6699cc', '#fc9e7b'],
  ];
  public color = this.colorVariants[0];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
  public width: number | null = null;
  public height = 300;
  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-treemap-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-treemap-example.component.html?raw'),
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
