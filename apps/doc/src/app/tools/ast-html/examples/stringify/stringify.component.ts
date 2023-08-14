import { Component } from '@angular/core';
import { prizmAstHtmlStringify } from '@prizm-ui/ast';

@Component({
  selector: 'prizm-stringify-base-example',
  templateUrl: './stringify.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
        flex-flow: row;
        margin: 16px 0;
      }
    `,
  ],
})
export class PrizmStringifyBaseExampleComponent {
  result = '';
  html = '';

  public cancel(): void {
    this.result = '';
    this.html = '';
  }

  public confirm(): void {
    this.result = prizmAstHtmlStringify(JSON.parse(this.html));
  }
}
