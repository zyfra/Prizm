import { Component } from '@angular/core';
import { PrizmButtonComponent, PrizmCounterDirective } from '@prizm-ui/components';

@Component({
  selector: 'prizm-outline-buttons-example',
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {
          display: flex;
          gap: 1rem;
          --prizm-button-min-width: 120px;
        }
      }
    `,
  ],
  standalone: true,
  imports: [PrizmButtonComponent, PrizmCounterDirective],
  templateUrl: './outline-buttons-example.component.html',
})
export class PrizmOutlineButtonsExampleComponent {}
