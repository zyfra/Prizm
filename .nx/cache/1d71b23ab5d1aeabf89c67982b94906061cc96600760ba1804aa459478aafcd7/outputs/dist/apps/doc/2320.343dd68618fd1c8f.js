"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2320],{2320:e=>{e.exports="import { Component, OnInit } from '@angular/core';\nimport {\n  PrizmAstHtmlItem,\n  prizmAstHtmlParse,\n  prizmAstHtmlStringify,\n  PrizmTemplateTask,\n  PrizmTemplateTaskProcessor,\n} from '@prizm-ui/ast';\nimport { ZyfraCheckboxTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';\n\n@Component({\n  selector: 'prizm-ast-chips-example',\n  templateUrl: './chips.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmAstChipsExampleComponent implements OnInit {\n  readonly tasks: PrizmTemplateTask[] = ZyfraCheckboxTemplateTasks;\n  // readonly tasks: PrizmTemplateTask[] = [\n  //   {\n  //     selector: 'zyfra-chip',\n  //     tasks: [\n  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {\n  //         name: 'prizm-chips-item',\n  //       }),\n  //     ],\n  //     inputs: {\n  //       label: [\n  //         prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {\n  //         }),\n  //       ],\n  //       removable: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           newAttrName: 'deletable'\n  //         }),\n  //       ],\n  //\n  //       icon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       image: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       removeIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //     },\n  //     outputs: {\n  //       onRemove: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           newAttrName: 'deleted'\n  //         }),\n  //       ],\n  //     }\n  //   },\n  //\n  // ];\n  readonly html = `\n<zyfra-chip label=\"Removable\" icon=\"zyfra-icon location-compass\" [removable]=\"true\" (onRemove)='null'></zyfra-chip>\n`;\n  result!: string;\n\n  public ngOnInit(): void {\n    this.parse();\n  }\n\n  private parse(): void {\n    const parsed = prizmAstHtmlParse(this.html);\n    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);\n    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);\n  }\n}\n"}}]);