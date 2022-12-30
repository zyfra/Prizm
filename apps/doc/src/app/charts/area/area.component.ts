import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PrizmSize, PrizmThemeService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent {
  height = 300;
  width: number = null;
  data: any = [
    [
      "2006 Q3",
      1
    ],
    [
      "2006 Q4",
      1.08
    ],
    [
      "2007 Q1",
      1.17
    ],
    [
      "2007 Q2",
      1.26
    ],
    [
      "2007 Q3",
      1.34
    ],
    [
      "2007 Q4",
      1.41
    ],
    [
      "2008 Q1",
      1.52
    ],
    [
      "2008 Q2",
      1.67
    ],
    [
      "2008 Q3",
      1.84
    ],
    [
      "2008 Q4",
      2.07
    ],
    [
      "2009 Q1",
      2.39
    ],
    [
      "2009 Q2",
      2.71
    ],
    [
      "2009 Q3",
      3.03
    ],
    [
      "2009 Q4",
      3.33
    ],
    [
      "2010 Q1",
      3.5
    ],
    [
      "2010 Q2",
      3.37
    ],
    [
      "2010 Q3",
      3.15
    ],
    [
      "2010 Q4",
      3.01
    ],
    [
      "2011 Q1",
      2.8
    ],
    [
      "2011 Q2",
      2.8
    ],
    [
      "2011 Q3",
      2.84
    ],
    [
      "2011 Q4",
      2.75
    ],
    [
      "2012 Q1",
      2.64
    ],
    [
      "2012 Q2",
      2.55
    ],
    [
      "2012 Q3",
      2.46
    ],
    [
      "2012 Q4",
      2.45
    ],
    [
      "2013 Q1",
      2.57
    ],
    [
      "2013 Q2",
      2.68
    ],
    [
      "2013 Q3",
      2.8
    ],
    [
      "2013 Q4",
      2.89
    ],
    [
      "2014 Q1",
      2.85
    ],
    [
      "2014 Q2",
      2.73
    ],
    [
      "2014 Q3",
      2.54
    ],
    [
      "2014 Q4",
      2.32
    ],
    [
      "2015 Q1",
      2.25
    ],
    [
      "2015 Q2",
      2.33
    ],
    [
      "2015 Q3",
      2.53
    ],
    [
      "2015 Q4",
      2.74
    ],
    [
      "2016 Q1",
      2.76
    ],
    [
      "2016 Q2",
      2.61
    ],
    [
      "2016 Q3",
      2.35
    ],
    [
      "2016 Q4",
      2.11
    ],
    [
      "2017 Q1",
      2.08
    ],
    [
      "2017 Q2",
      2.2
    ],
    [
      "2017 Q3",
      2.38
    ],
    [
      "2017 Q4",
      2.59
    ],
    [
      "2018 Q1",
      2.63
    ],
    [
      "2018 Q2",
      2.67
    ],
    [
      "2018 Q3",
      2.64
    ],
    [
      "2018 Q4",
      2.5
    ],
    [
      "2019 Q1",
      2.31
    ],
    [
      "2019 Q2",
      2.04
    ],
    [
      "2019 Q3",
      1.83
    ],
    [
      "2019 Q4",
      1.71
    ],
    [
      "2020 Q1",
      1.65
    ],
    [
      "2020 Q2",
      1.59
    ],
    [
      "2020 Q3",
      1.58
    ]
  ];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/prizm-charts-area-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/prizm-charts-area-example.component.html'),
  };

  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {
  }
}
