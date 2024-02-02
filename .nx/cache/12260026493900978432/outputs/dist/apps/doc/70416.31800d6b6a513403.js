"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70416],{70416:e=>{e.exports="import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-dialog-service-result-handling-example',\n  templateUrl: './dialog-result-handling-example.component.html',\n  styles: [\n    `\n      .content {\n        padding: 8px;\n      }\n      .box {\n        display: flex;\n        justify-content: flex-end;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmDialogServiceResultHandlingExampleComponent {\n  @ViewChild('footerTemp', { read: TemplateRef }) footerTemp!: TemplateRef<any>;\n  @ViewChild('content', { read: TemplateRef }) content!: TemplateRef<any>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public control = new UntypedFormControl('');\n  public result: unknown;\n\n  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}\n\n  public show(): void {\n    this.dialogService\n      .open(this.content, {\n        closeable: true,\n        header: 'Header',\n        width: 500,\n        footer: this.footerTemp,\n        position: this.position,\n        backdrop: false,\n        size: 'm',\n      })\n      .subscribe(result => {\n        this.result = result;\n        this.control.reset();\n      });\n  }\n}\n"}}]);