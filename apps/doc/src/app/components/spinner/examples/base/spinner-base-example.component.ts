import { Component } from '@angular/core';

@Component({
  selector: 'prizm-spinner-base-example',
  templateUrl: './spinner-base-example.component.html',
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
          font-size: 20px;
          flex-wrap: wrap;
        }

        prizm-icon {
          cursor: pointer;
        }
      }
    `,
  ],
})
export class PrizmSpinnerBaseExampleComponent {}
