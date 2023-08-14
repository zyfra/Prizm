import { Component } from '@angular/core';
import { prizmAstHtmlParse, prizmAstHtmlPrettify } from '@prizm-ui/ast';

@Component({
  selector: 'prizm-parse-base-example',
  templateUrl: './base.component.html',
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
export class PrizmParseBaseExampleComponent {
  result = '';
  html = '';

  public cancel(): void {
    this.result = '';
    this.html = '';
  }

  public confirm(): void {
    this.result = prizmAstHtmlParse(this.html);
  }
}
