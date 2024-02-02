'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50688],
  {
    50688: e => {
      e.exports =
        "import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { FormControl, Validators } from '@angular/forms';\nimport { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-dialog-service-with-parent-example',\n  templateUrl: './dialog-with-parent-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmDialogServiceWithParentExampleComponent {\n  @ViewChild('contentExample') contentExample!: TemplateRef<never>;\n  @ViewChild('parentPanel') parentPanel!: ElementRef<never>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n  public dismissible = true;\n\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly control = new FormControl(this.items[1], [Validators.required]);\n\n  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}\n\n  public show(): void {\n    this.dialogService\n      .open(this.contentExample, {\n        closeable: true,\n        header: 'Header',\n        width: 500,\n        closeWord: '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c',\n        position: this.position,\n        dismissible: this.dismissible,\n        parentContainer: this.parentPanel.nativeElement,\n        backdrop: this.backdrop,\n        size: 'm',\n        styleVars: {\n          dialogContentPadding: '5px 10px 25px 20px',\n        },\n      })\n      .subscribe();\n  }\n}\n";
    },
  },
]);
