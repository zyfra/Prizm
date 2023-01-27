import { Component } from '@angular/core';

@Component({
  selector: 'prizm-scrollbar-base-example',
  templateUrl: './scrollbar-base-example.component.html',
  styles: [
    `
      .box {
        width: 16rem;
        height: 9.75rem;
        border: 1px solid gray;
      }

      .content {
        padding: 0 0.6875rem;
      }
    `,
  ],
})
export class PrizmScrollbarBaseExampleComponent {}
