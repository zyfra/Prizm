'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17455],
  {
    17455: n => {
      n.exports =
        'import { Component, OnInit } from \'@angular/core\';\nimport {\n  PrizmAstHtmlItem,\n  prizmAstHtmlParse,\n  prizmAstHtmlStringify,\n  PrizmTemplateTask,\n  PrizmTemplateTaskProcessor,\n} from \'@prizm-ui/ast\';\nimport { ZyfraInputNumberTemplateTasks } from \'@prizm-ui/ast/cb3-template-examples\';\n\n@Component({\n  selector: \'prizm-ast-input-number-example\',\n  templateUrl: \'./input-number.component.html\',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmAstInputNumberExampleComponent implements OnInit {\n  readonly tasks: PrizmTemplateTask[] = ZyfraInputNumberTemplateTasks;\n\n  readonly html = `\n<zyfra-input-number\n    [(ngModel)]="model"\n    [formControl]="formControl"\n    [formControlName]="formControlName"\n    label="label"\n    placeholder="placeholder"\n    showButtons="true"\n    mode="currency"\n    currency="USD"\n></zyfra-input-number>`;\n  result!: string;\n\n  public ngOnInit(): void {\n    this.parse();\n  }\n\n  private parse(): void {\n    const parsed = prizmAstHtmlParse(this.html);\n    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);\n    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);\n  }\n}\n';
    },
  },
]);
