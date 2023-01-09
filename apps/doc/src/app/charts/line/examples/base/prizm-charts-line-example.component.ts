import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';

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
  data =[
    {
      "x": "Понедельник",
      "y": 50
    },
    {
      "x": "Вторник",
      "y": 200
    },
    {
      "x": "Среда",
      "y": 150
    },
    {
      "x": "Четверг",
      "y": 100
    },
    {
      "x": "Пятница",
      "y": 150
    },
    {
      "x": "Суббота",
      "y": 200
    },
    {
      "x": "Воскресенье",
      "y": 200
    }
  ];

  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {
  }
}
