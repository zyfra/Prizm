'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [25407],
  {
    25407: e => {
      e.exports =
        "import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-dialog-service-with-buttons-example',\n  templateUrl: './dialog-with-buttons-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmDialogServiceWithButtonsExampleComponent {\n  @ViewChild('footerTemp', { read: TemplateRef }) footerTemp!: TemplateRef<any>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n\n  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}\n\n  public show(): void {\n    this.dialogService\n      .open(\n        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,\n        {\n          closeable: true,\n          header: 'Header',\n          width: 500,\n          footer: this.footerTemp,\n          closeWord: '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c',\n          position: this.position,\n          backdrop: this.backdrop,\n          size: 'm',\n        }\n      )\n      .subscribe();\n  }\n}\n";
    },
  },
]);
