import { Component } from '@angular/core';

@Component({
  selector: 'prizm-charts-pie-example',
  templateUrl: './prizm-charts-pie-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `
  ],
})
export class PrizmChartsPieExampleComponent {

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
}
