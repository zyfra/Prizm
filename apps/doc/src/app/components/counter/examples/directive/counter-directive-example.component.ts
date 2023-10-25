import { Component } from '@angular/core';

@Component({
  selector: 'prizm-counter-directive-example',
  templateUrl: './counter-directive-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    `,
  ],
})
export class PrizmCounterDirectiveExampleComponent {
  public readonly count = 10;
}
