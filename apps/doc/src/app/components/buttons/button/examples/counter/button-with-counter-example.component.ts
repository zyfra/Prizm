import { Component } from '@angular/core';
import { PrizmButtonModule, PrizmCounterDirective } from '@prizm-ui/components';

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
  standalone: true,
  imports: [PrizmButtonModule, PrizmCounterDirective],
})
export class PrizmButtonWithCounterExampleComponent {
  public readonly count = 10;
}
