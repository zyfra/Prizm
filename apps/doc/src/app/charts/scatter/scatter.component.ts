import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './scatter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScatterComponent {
  public data = [
    {
      'H/A': 'A',
      Team: 'Torino',
      'xG conceded': 0.62,
      'Shot conceded': 10,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Atalanta',
      'xG conceded': 2.35,
      'Shot conceded': 23,
      Result: '1',
    },
    {
      'H/A': 'A',
      Team: 'Milan',
      'xG conceded': 1.89,
      'Shot conceded': 26,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Chievo',
      'xG conceded': 1.4,
      'Shot conceded': 13,
      Result: '1',
    },
    {
      'H/A': 'A',
      Team: 'Bologna',
      'xG conceded': 1.02,
      'Shot conceded': 11,
      Result: 0,
    },
    {
      'H/A': 'H',
      Team: 'Frosinone',
      'xG conceded': 0.56,
      'Shot conceded': 11,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Lazio',
      'xG conceded': 1.01,
      'Shot conceded': 16,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Empoli',
      'xG conceded': 1.56,
      'Shot conceded': 20,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Spal',
      'xG conceded': 1.8,
      'Shot conceded': 6,
      Result: '0',
    },
    {
      'H/A': 'A',
      Team: 'Napoli',
      'xG conceded': 2.49,
      'Shot conceded': 26,
      Result: '1',
    },
    {
      'H/A': 'A',
      Team: 'Fiorentina',
      'xG conceded': 1.3,
      'Shot conceded': 14,
      Result: '1',
    },
    {
      'H/A': 'H',
      Team: 'Sampdoria',
      'xG conceded': 1.2,
      'Shot conceded': 8,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Udinese',
      'xG conceded': 1.22,
      'Shot conceded': 9,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Inter',
      'xG conceded': 2.68,
      'Shot conceded': 17,
      Result: '1',
    },
    {
      'H/A': 'A',
      Team: 'Cagliari',
      'xG conceded': 2.1,
      'Shot conceded': 16,
      Result: '1',
    },
    {
      'H/A': 'H',
      Team: 'Genoa',
      'xG conceded': 1.84,
      'Shot conceded': 15,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Juventus',
      'xG conceded': 2.12,
      'Shot conceded': 20,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Sassuolo',
      'xG conceded': 0.72,
      'Shot conceded': 10,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Parma',
      'xG conceded': 0.58,
      'Shot conceded': 6,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Torino',
      'xG conceded': 1.87,
      'Shot conceded': 10,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Atalanta',
      'xG conceded': 2.68,
      'Shot conceded': 23,
      Result: '1',
    },
    {
      'H/A': 'H',
      Team: 'Milan',
      'xG conceded': 0.85,
      'Shot conceded': 8,
      Result: '1',
    },
    {
      'H/A': 'A',
      Team: 'Chievo',
      'xG conceded': 0.84,
      'Shot conceded': 16,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Bologna',
      'xG conceded': 2.69,
      'Shot conceded': 20,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Frosinone',
      'xG conceded': 1.51,
      'Shot conceded': 11,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Lazio',
      'xG conceded': 1.77,
      'Shot conceded': 13,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Empoli',
      'xG conceded': 0.14,
      'Shot conceded': 5,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'Real Madrid',
      'xG conceded': 3.58,
      'Shot conceded': 30,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Viktoria Plzen',
      'xG conceded': 0.33,
      'Shot conceded': 7,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'CSKA Moscow',
      'xG conceded': 0.73,
      'Shot conceded': 13,
      Result: '3',
    },
    {
      'H/A': 'A',
      Team: 'CSKA Moscow',
      'xG conceded': 1.1,
      'Shot conceded': 14,
      Result: '3',
    },
    {
      'H/A': 'H',
      Team: 'Real Madrid',
      'xG conceded': 1.87,
      'Shot conceded': 12,
      Result: '0',
    },
    {
      'H/A': 'A',
      Team: 'Viktoria Plzen',
      'xG conceded': 1.85,
      'Shot conceded': 13,
      Result: '0',
    },
    {
      'H/A': 'A',
      Team: 'Porto',
      'xG conceded': 3.71,
      'Shot conceded': 31,
      Result: '0',
    },
    {
      'H/A': 'H',
      Team: 'Porto',
      'xG conceded': 0.56,
      'Shot conceded': 7,
      Result: '3',
    },
  ];
  public width: number | null = null;
  public height = 300;
  public yField = 'Shot conceded';
  public xField = 'xG conceded';
  public colorField = 'Result';
  public colorVariants = ['', '#664d4d', ['red', 'blue', 'green'], ['#650000', '#7dbbb0', '#a37c18']];
  public color = this.colorVariants[0];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-scatter-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-scatter-example.component.html?raw'),
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
