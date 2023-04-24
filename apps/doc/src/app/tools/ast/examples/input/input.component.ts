import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraInputTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-input-example',
  templateUrl: './input.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstInputExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraInputTemplateTasks;
  readonly html = `
<zyfra-input
  [id]="id"
  [type]="type"
  [(ngModel)]="ngModel"
  [disabled]="disabled"
  [placeholder]="placeholder"
  [tooltip]="tooltip"
  [tooltipPosition]="tooltipPosition"
  [label]="label"
></zyfra-input>`;
  result: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
