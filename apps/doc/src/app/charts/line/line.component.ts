import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineComponent {
  height = 300;
  xField = 'x';
  yField = 'y';
  width: number | null = null;
  seriesField: string | null = null;
  data: any = [
    {
      x: '2010-01',
      y: 1998,
      key: 'red',
    },
    {
      x: '2010-02',
      y: 1850,
      key: 'blue',
    },
    {
      x: '2010-03',
      y: 1720,
      key: 'red',
    },
    {
      x: '2010-04',
      y: 1818,
      key: 'blue',
    },
    {
      x: '2010-05',
      y: 1920,
      key: 'red',
    },
    {
      x: '2010-06',
      y: 1802,
      key: 'blue',
    },
    {
      x: '2010-07',
      y: 1945,
      key: 'red',
    },
    {
      x: '2010-08',
      y: 1856,
      key: 'blue',
    },
    {
      x: '2010-09',
      y: 2107,
      key: 'red',
    },
    {
      x: '2010-10',
      y: 2140,
      key: 'blue',
    },
    {
      x: '2010-11',
      y: 2311,
      key: 'red',
    },
    {
      x: '2010-12',
      y: 1972,
      key: 'blue',
    },
    {
      x: '2011-01',
      y: 1760,
      key: 'red',
    },
    {
      x: '2011-02',
      y: 1824,
      key: 'blue',
    },
    {
      x: '2011-03',
      y: 1801,
      key: 'red',
    },
    {
      x: '2011-04',
      y: 2001,
      key: 'blue',
    },
    {
      x: '2011-05',
      y: 1640,
      key: 'red',
    },
    {
      x: '2011-06',
      y: 1502,
      key: 'blue',
    },
    {
      x: '2011-07',
      y: 1621,
      key: 'red',
    },
    {
      x: '2011-08',
      y: 1480,
      key: 'blue',
    },
    {
      x: '2011-09',
      y: 1549,
      key: 'red',
    },
    {
      x: '2011-10',
      y: 1390,
      key: 'blue',
    },
    {
      x: '2011-11',
      y: 1325,
      key: 'red',
    },
    {
      x: '2011-12',
      y: 1250,
      key: 'blue',
    },
    {
      x: '2012-01',
      y: 1394,
      key: 'red',
    },
    {
      x: '2012-02',
      y: 1406,
      key: 'blue',
    },
    {
      x: '2012-03',
      y: 1578,
      key: 'red',
    },
    {
      x: '2012-04',
      y: 1465,
      key: 'blue',
    },
    {
      x: '2012-05',
      y: 1689,
      key: 'red',
    },
    {
      x: '2012-06',
      y: 1755,
      key: 'blue',
    },
    {
      x: '2012-07',
      y: 1495,
      key: 'red',
    },
    {
      x: '2012-08',
      y: 1508,
      key: 'blue',
    },
    {
      x: '2012-09',
      y: 1433,
      key: 'red',
    },
    {
      x: '2012-10',
      y: 1344,
      key: 'blue',
    },
    {
      x: '2012-11',
      y: 1201,
      key: 'red',
    },
    {
      x: '2012-12',
      y: 1065,
      key: 'blue',
    },
    {
      x: '2013-01',
      y: 1255,
      key: 'red',
    },
    {
      x: '2013-02',
      y: 1429,
      key: 'blue',
    },
    {
      x: '2013-03',
      y: 1398,
      key: 'blue',
    },
    {
      x: '2013-04',
      y: 1678,
      key: 'red',
    },
    {
      x: '2013-05',
      y: 1524,
      key: 'blue',
    },
    {
      x: '2013-06',
      y: 1688,
      key: 'red',
    },
    {
      x: '2013-07',
      y: 1500,
      key: 'blue',
    },
    {
      x: '2013-08',
      y: 1670,
      key: 'red',
    },
    {
      x: '2013-09',
      y: 1734,
      key: 'blue',
    },
    {
      x: '2013-10',
      y: 1699,
      key: 'red',
    },
    {
      x: '2013-11',
      y: 1508,
      key: 'blue',
    },
    {
      x: '2013-12',
      y: 1680,
      key: 'red',
    },
    {
      x: '2014-01',
      y: 1750,
      key: 'blue',
    },
    {
      x: '2014-02',
      y: 1602,
      key: 'red',
    },
    {
      x: '2014-03',
      y: 1834,
      key: 'blue',
    },
    {
      x: '2014-04',
      y: 1722,
      key: 'red',
    },
    {
      x: '2014-05',
      y: 1430,
      key: 'blue',
    },
    {
      x: '2014-06',
      y: 1280,
      key: 'red',
    },
    {
      x: '2014-07',
      y: 1367,
      key: 'blue',
    },
    {
      x: '2014-08',
      y: 1155,
      key: 'red',
    },
    {
      x: '2014-09',
      y: 1289,
      key: 'blue',
    },
    {
      x: '2014-10',
      y: 1104,
      key: 'red',
    },
    {
      x: '2014-11',
      y: 1246,
      key: 'blue',
    },
    {
      x: '2014-12',
      y: 1098,
      key: 'red',
    },
    {
      x: '2015-01',
      y: 1189,
      key: 'blue',
    },
    {
      x: '2015-02',
      y: 1276,
      key: 'red',
    },
    {
      x: '2015-03',
      y: 1033,
      key: 'blue',
    },
    {
      x: '2015-04',
      y: 956,
      key: 'red',
    },
    {
      x: '2015-05',
      y: 845,
      key: 'blue',
    },
    {
      x: '2015-06',
      y: 1089,
      key: 'red',
    },
    {
      x: '2015-07',
      y: 944,
      key: 'blue',
    },
    {
      x: '2015-08',
      y: 1043,
      key: 'red',
    },
    {
      x: '2015-09',
      y: 893,
      key: 'blue',
    },
    {
      x: '2015-10',
      y: 840,
      key: 'red',
    },
    {
      x: '2015-11',
      y: 934,
      key: 'blue',
    },
    {
      x: '2015-12',
      y: 810,
      key: 'red',
    },
    {
      x: '2016-01',
      y: 782,
      key: 'blue',
    },
    {
      x: '2016-02',
      y: 1089,
      key: 'red',
    },
    {
      x: '2016-03',
      y: 745,
      key: 'blue',
    },
    {
      x: '2016-04',
      y: 680,
      key: 'red',
    },
    {
      x: '2016-05',
      y: 802,
      key: 'blue',
    },
    {
      x: '2016-06',
      y: 697,
      key: 'red',
    },
    {
      x: '2016-07',
      y: 583,
      key: 'blue',
    },
    {
      x: '2016-08',
      y: 456,
      key: 'red',
    },
    {
      x: '2016-09',
      y: 524,
      key: 'blue',
    },
    {
      x: '2016-10',
      y: 398,
      key: 'red',
    },
    {
      x: '2016-11',
      y: 278,
      key: 'blue',
    },
    {
      x: '2016-12',
      y: 195,
      key: 'red',
    },
    {
      x: '2017-01',
      y: 145,
      key: 'blue',
    },
    {
      x: '2017-02',
      y: 207,
      key: 'red',
    },
  ];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-line-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-line-example.component.html?raw'),
  };

  readonly exampleSmooth: TuiDocExample = {
    TypeScript: import('./examples/smooth/prizm-charts-line-smooth-example.component.ts?raw'),
    HTML: import('./examples/smooth/prizm-charts-line-smooth-example.component.html?raw'),
  };

  readonly exampleSeries: TuiDocExample = {
    TypeScript: import('./examples/series/prizm-charts-line-series-example.component.ts?raw'),
    HTML: import('./examples/series/prizm-charts-line-series-example.component.html?raw'),
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
