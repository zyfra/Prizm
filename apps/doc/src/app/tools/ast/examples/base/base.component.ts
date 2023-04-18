import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTask,
  PrizmTaskProcessor,
} from '@prizm-ui/ast';

@Component({
  selector: 'prizm-ast-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstBaseExampleComponent implements OnInit {
  readonly task: PrizmTask = {
    name: 'zyfra-button',
    selector: [
      { type: 'change-name', value: 'button' },
      { type: 'add-attribute', value: 'prizmButton' },
    ],
    inputs: {
      label: [{ type: 'move-to-content' }],
      iconPos: [{ type: 'add-comment', value: "TODO: we don't have input iconPos: fix manually" }],
    },
    outputs: {},
  };
  readonly html = `<zyfra-button label='123' iconPos='left'></zyfra-button>`;
  resultHtml: string;

  public ngOnInit(): void {
    const parsed = prizmHtmlParse(this.html);
    const nodeProcessor = new PrizmTaskProcessor([this.task]);
    this.resultHtml = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
