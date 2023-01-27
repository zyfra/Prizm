import { Component } from '@angular/core';

@Component({
  selector: 'prizm-error-page-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      :host {
        display: block;
        height: 56.25vh;
      }

      .description {
        width: 340px;
        margin: 0 auto;
        text-align: center;

        &__links {
          display: flex;
          justify-content: space-between;
          margin: 32px 0 0 0;
          padding: 0;
        }

        &__link {
          color: var(--prizm-index-plan);
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
      }
    `,
  ],
})
export class PrizmErrorPageBaseComponent {}
