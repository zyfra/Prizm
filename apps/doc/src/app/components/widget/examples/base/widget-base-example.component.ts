import { Component } from '@angular/core';

@Component({
  selector: 'prizm-widget-base-example',
  templateUrl: './widget-base-example.component.html',
  styles: [
    `
      prizm-widget {
        color: var(--prizm-text-icon-secondary);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        display: block;
      }
    `,
  ],
})
export class PrizmWidgetBaseExampleComponent {}
