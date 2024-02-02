'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11985],
  {
    11985: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport {\n  PrizmAstHtmlItem,\n  prizmAstHtmlParse,\n  prizmAstHtmlStringify,\n  PrizmTemplateTask,\n  PrizmTemplateTaskProcessor,\n} from '@prizm-ui/ast';\nimport { ZyfraSpinnerTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';\n\n@Component({\n  selector: 'prizm-ast-spinner-example',\n  templateUrl: './spinner.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmAstSpinnerExampleComponent implements OnInit {\n  readonly tasks: PrizmTemplateTask[] = ZyfraSpinnerTemplateTasks;\n  // readonly tasks: PrizmTemplateTask[] = [\n  //   {\n  //     selector: 'zyfra-spinner',\n  //     tasks: [\n  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {\n  //         name: 'prizm-spinner',\n  //       }),\n  //     ],\n  //     inputs: {\n  //       size: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           needFixApi: true,\n  //           newAttrName: 'size',\n  //           setExactNewAttrName: true,\n  //           value: 'l'\n  //         })\n  //       ],\n  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       strokeWidth: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       fill: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       animationDuration: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       color: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //     },\n  //     outputs: {\n  //     },\n  //   }\n  // ];\n  readonly html = `\n<zyfra-spinner\n  size=\"50px\"\n  color=\"success\"\n  [style]=\"{ opacity: 0.5 }\"\n></zyfra-spinner>\n`;\n  result!: string;\n\n  public ngOnInit(): void {\n    this.parse();\n  }\n\n  private parse(): void {\n    const parsed = prizmAstHtmlParse(this.html);\n    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);\n    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);\n  }\n}\n";
    },
  },
]);
