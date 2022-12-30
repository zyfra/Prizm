import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-charts-line-example',
  templateUrl: './prizm-charts-line-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `
  ],
})
export class PrizmChartsLinesExampleComponent {

  data: any = [
    [
      "Понедельник",
      50
    ],
    [
      "Вторник",
      200
    ],
    [
      "Среда",
      150
    ],
    [
      "Четверг",
      100
    ],
    [
      "Пятница",
      150
    ],
    [
      "Суббота",
      200
    ],
    [
      "Воскресенье",
      200
    ],
  ];

  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {
  }
}
