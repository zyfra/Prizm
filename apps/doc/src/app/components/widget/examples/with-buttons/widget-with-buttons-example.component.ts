import { Component } from '@angular/core';

@Component({
  selector: 'prizm-widget-with-buttons-example',
  templateUrl: './widget-with-buttons-example.component.html',
  styles: [
    `
      prizm-widget {
        color: var(--prizm-text-icon-secondary);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    `,
  ],
})
export class PrizmWidgetWithButtonsExampleComponent {}
