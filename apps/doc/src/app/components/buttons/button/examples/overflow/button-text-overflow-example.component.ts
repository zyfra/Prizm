import { Component } from '@angular/core';
import { PrizmButtonComponent, PrizmHintOnOverflowDirective } from '@prizm-ui/components';

@Component({
  selector: 'prizm-button-text-overflow-example',
  templateUrl: './button-text-overflow-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        gap: 20px;

        [prizmButton] {
          max-width: 120px;
        }
      }
    `,
  ],
  standalone: true,
  imports: [PrizmButtonComponent, PrizmHintOnOverflowDirective],
})
export class PrizmButtonTextOverflowExampleComponent {}
