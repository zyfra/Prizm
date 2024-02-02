"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[75167],{75167:e=>{e.exports='import { Component, OnInit } from \'@angular/core\';\nimport {\n  PrizmAstHtmlItem,\n  prizmAstHtmlParse,\n  prizmAstHtmlStringify,\n  PrizmTemplateTask,\n  PrizmTemplateTaskProcessor,\n} from \'@prizm-ui/ast\';\nimport { ZyfraRadioTemplateTasks } from \'@prizm-ui/ast/cb3-template-examples\';\n\n@Component({\n  selector: \'prizm-ast-radio-example\',\n  templateUrl: \'./radio.component.html\',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmAstRadioExampleComponent implements OnInit {\n  readonly tasks: PrizmTemplateTask[] = ZyfraRadioTemplateTasks;\n  // readonly tasks: PrizmTemplateTask[] = [\n  //   {\n  //     selector: \'zyfra-radio-button\',\n  //     tasks: [\n  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {\n  //         name: \'prizm-radio-button\',\n  //       }),\n  //     ],\n  //     inputs: {\n  //       formControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       formControlName: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],\n  //     },\n  //     outputs: {\n  //       onClick: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           newAttrName: \'clickEvent\',\n  //         }),\n  //       ],\n  //       onBlur: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           newAttrName: \'blurEvent\',\n  //         }),\n  //       ],\n  //       onFocus: [\n  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {\n  //           newAttrName: \'focusEvent\',\n  //         }),\n  //       ]\n  //     }\n  //   },\n  //\n  // ];\n  readonly html = `\n<zyfra-radio-button\n   *ngFor="let item of items"\n   [name]="name"\n   [styleClass]="styleClass"\n   [label]="item.label"\n   [value]="item.value"\n   [disabled]="disabled"\n   [(ngModel)]="model"\n   (onClick)="onClick($event)"\n   (ngModelChange)="ngModelChange($event)"\n   (onFocus)="onFocus($event)"\n   (onBlur)="onBlur($event)"\n></zyfra-radio-button>\n`;\n  result!: string;\n\n  public ngOnInit(): void {\n    this.parseAccordion();\n  }\n\n  private parseAccordion(): void {\n    const parsed = prizmAstHtmlParse(this.html);\n    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);\n    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);\n  }\n}\n'}}]);