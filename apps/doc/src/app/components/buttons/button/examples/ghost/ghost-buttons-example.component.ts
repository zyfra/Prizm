import { Component } from '@angular/core';
import { PrizmButtonModule, PrizmCounterDirective } from '@prizm-ui/components';

@Component({
  selector: 'prizm-ghost-buttons-example',
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
  imports: [PrizmButtonModule, PrizmCounterDirective],
  templateUrl: './ghost-buttons-example.component.html',
})
export class PrizmGhostButtonsExampleComponent {}
