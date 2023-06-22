import { Component } from '@angular/core';

@Component({
  selector: 'prizm-sticky-base-example',
  templateUrl: './sticky-base-example.component.html',
  styleUrls: ['./sticky-base-example.component.less'],
  styles: [
    `
      prizm-sticky {
        padding: 16px;
        color: var(--prizm-text-main);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    `,
  ],
})
export class PrizmStickyBaseExampleComponent {
  readonly cols = new Array(100).map((_, idx) => idx + 1);
}
