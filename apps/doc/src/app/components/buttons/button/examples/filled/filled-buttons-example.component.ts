import { Component } from '@angular/core';

@Component({
  selector: 'prizm-filled-buttons-example',
  templateUrl: './filled-buttons-example.component.html',
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
})
export class PrizmFilledButtonsExampleComponent {}
