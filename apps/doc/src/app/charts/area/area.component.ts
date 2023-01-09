import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmThemeService } from '@prizm-ui/theme';
@Component({
  selector: 'prizm-button-example',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent {
  height = 300;
  width: number = null;
  xField = 'x';
  yField = 'y';
  data = [
    {
      "x": "2006 Q3",
      "y": 1
    },
    {
      "x": "2006 Q4",
      "y": 1.08
    },
    {
      "x": "2007 Q1",
      "y": 1.17
    },
    {
      "x": "2007 Q2",
      "y": 1.26
    },
    {
      "x": "2007 Q3",
      "y": 1.34
    },
    {
      "x": "2007 Q4",
      "y": 1.41
    },
    {
      "x": "2008 Q1",
      "y": 1.52
    },
    {
      "x": "2008 Q2",
      "y": 1.67
    },
    {
      "x": "2008 Q3",
      "y": 1.84
    },
    {
      "x": "2008 Q4",
      "y": 2.07
    },
    {
      "x": "2009 Q1",
      "y": 2.39
    },
    {
      "x": "2009 Q2",
      "y": 2.71
    },
    {
      "x": "2009 Q3",
      "y": 3.03
    },
    {
      "x": "2009 Q4",
      "y": 3.33
    },
    {
      "x": "2010 Q1",
      "y": 3.5
    },
    {
      "x": "2010 Q2",
      "y": 3.37
    },
    {
      "x": "2010 Q3",
      "y": 3.15
    },
    {
      "x": "2010 Q4",
      "y": 3.01
    },
    {
      "x": "2011 Q1",
      "y": 2.8
    },
    {
      "x": "2011 Q2",
      "y": 2.8
    },
    {
      "x": "2011 Q3",
      "y": 2.84
    },
    {
      "x": "2011 Q4",
      "y": 2.75
    },
    {
      "x": "2012 Q1",
      "y": 2.64
    },
    {
      "x": "2012 Q2",
      "y": 2.55
    },
    {
      "x": "2012 Q3",
      "y": 2.46
    },
    {
      "x": "2012 Q4",
      "y": 2.45
    },
    {
      "x": "2013 Q1",
      "y": 2.57
    },
    {
      "x": "2013 Q2",
      "y": 2.68
    },
    {
      "x": "2013 Q3",
      "y": 2.8
    },
    {
      "x": "2013 Q4",
      "y": 2.89
    },
    {
      "x": "2014 Q1",
      "y": 2.85
    },
    {
      "x": "2014 Q2",
      "y": 2.73
    },
    {
      "x": "2014 Q3",
      "y": 2.54
    },
    {
      "x": "2014 Q4",
      "y": 2.32
    },
    {
      "x": "2015 Q1",
      "y": 2.25
    },
    {
      "x": "2015 Q2",
      "y": 2.33
    },
    {
      "x": "2015 Q3",
      "y": 2.53
    },
    {
      "x": "2015 Q4",
      "y": 2.74
    },
    {
      "x": "2016 Q1",
      "y": 2.76
    },
    {
      "x": "2016 Q2",
      "y": 2.61
    },
    {
      "x": "2016 Q3",
      "y": 2.35
    },
    {
      "x": "2016 Q4",
      "y": 2.11
    },
    {
      "x": "2017 Q1",
      "y": 2.08
    },
    {
      "x": "2017 Q2",
      "y": 2.2
    },
    {
      "x": "2017 Q3",
      "y": 2.38
    },
    {
      "x": "2017 Q4",
      "y": 2.59
    },
    {
      "x": "2018 Q1",
      "y": 2.63
    },
    {
      "x": "2018 Q2",
      "y": 2.67
    },
    {
      "x": "2018 Q3",
      "y": 2.64
    },
    {
      "x": "2018 Q4",
      "y": 2.5
    },
    {
      "x": "2019 Q1",
      "y": 2.31
    },
    {
      "x": "2019 Q2",
      "y": 2.04
    },
    {
      "x": "2019 Q3",
      "y": 1.83
    },
    {
      "x": "2019 Q4",
      "y": 1.71
    },
    {
      "x": "2020 Q1",
      "y": 1.65
    },
    {
      "x": "2020 Q2",
      "y": 1.59
    },
    {
      "x": "2020 Q3",
      "y": 1.58
    }
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
