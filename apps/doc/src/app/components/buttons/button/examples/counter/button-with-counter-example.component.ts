import { Component } from '@angular/core';

@Component({
  selector: 'prizm-button-with-counter-example',
  templateUrl: './button-with-counter-example.component.html',
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
export class PrizmButtonWithCounterExampleComponent {
  public readonly count = 10;
}
