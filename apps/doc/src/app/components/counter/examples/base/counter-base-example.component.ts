import { Component } from '@angular/core';

@Component({
  selector: 'prizm-counter-base-example',
  templateUrl: './counter-base-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    `,
  ],
})
export class PrizmCounterBaseExampleComponent {
  public readonly count = 8;
}
