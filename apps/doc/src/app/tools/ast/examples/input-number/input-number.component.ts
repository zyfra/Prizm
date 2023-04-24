import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
  ZyfraInputNumberTemplateTasks,
} from '@prizm-ui/ast';
@Component({
  selector: 'prizm-ast-input-number-example',
  templateUrl: './input-number.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstInputNumberExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraInputNumberTemplateTasks;

  readonly html = `
<zyfra-input-number
    [(ngModel)]="model"
    [formControl]="formControl"
    [formControlName]="formControlName"
    label="label"
    placeholder="placeholder"
    showButtons="true"
    mode="currency"
    currency="USD"
></zyfra-input-number>`;
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
