import { Component } from '@angular/core';

@Component({
  selector: 'prizm-widget-base-example',
  templateUrl: './widget-base-example.component.html',
  styles: [
    `
      prizm-widget {
        padding: 16px;
        color: var(--prizm-text-main);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        display: block;
        height: 300px;
      }
    `,
  ],
})
export class PrizmWidgetBaseExampleComponent {}
