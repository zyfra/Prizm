import { Component } from '@angular/core';

@Component({
  selector: 'prizm-icons-base-example',
  templateUrl: './icons-base-example.component.html',
  styles: [
    `
      .icons-24 {
        font-size: 24px;
        color: var(--prizm-status-info-primary-default);
      }
      .icons-16 {
        font-size: 16px;
        color: var(--prizm-status-info-primary-default);
      }
    `,
  ],
})
export class PrizmIconsSvgBaseExampleComponent {}
