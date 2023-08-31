import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraInputNumberTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

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
  result!: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
