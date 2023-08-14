import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmChartsBarComponent, PrizmChartsBarOptions } from '@prizm-ui/charts';

@Component({
  selector: 'prizm-charts-bar-example',
  templateUrl: './prizm-charts-bar-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsBarExampleComponent implements AfterViewInit {
  @ViewChild('bar') bar: PrizmChartsBarComponent<any>;
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
  readonly color: PrizmChartsBarOptions['color'] = data => {
    return data.sales > 40 ? 'red' : 'green';
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}

  ngAfterViewInit(): void {
    // we can update options manually
    this.bar.updateOptions({
      legend: false,
      // color: this.color
    });
  }
}
