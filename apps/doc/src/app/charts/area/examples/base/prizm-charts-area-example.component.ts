import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-charts-area-example',
  templateUrl: './prizm-charts-area-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `
  ],
})
export class PrizmChartsAreaExampleComponent {

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
