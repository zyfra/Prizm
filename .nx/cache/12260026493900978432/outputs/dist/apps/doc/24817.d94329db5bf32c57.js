'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [24817],
  {
    24817: n => {
      n.exports =
        "import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-sidebar-only-confirm-button-example',\n  templateUrl: './only-confirm-button.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSidebarOnlyConfirmButtonExampleComponent {\n  @ViewChild('contentExample') contentExample!: TemplateRef<any>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = [\n    PrizmOverlayInsidePlacement.LEFT,\n    PrizmOverlayInsidePlacement.RIGHT,\n  ];\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n  public dismissible = false;\n\n  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}\n\n  public show(): void {\n    this.sidebarService\n      .open(this.contentExample, {\n        closeable: true,\n        headerTemplate: 'Header',\n        width: '400px',\n        cancelButton: null,\n        supportButton: null,\n        confirmButton: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',\n        position: this.position,\n        backdrop: this.backdrop,\n        dismissible: this.dismissible,\n        size: 'm',\n      })\n      .subscribe();\n  }\n}\n";
    },
  },
]);
