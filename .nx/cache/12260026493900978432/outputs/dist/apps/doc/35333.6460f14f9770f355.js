'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [35333],
  {
    35333: e => {
      e.exports =
        "import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-sidebar-service-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSidebarServiceExampleComponent {\n  @ViewChild('contentExample') contentExample!: TemplateRef<any>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = [\n    PrizmOverlayInsidePlacement.LEFT,\n    PrizmOverlayInsidePlacement.RIGHT,\n  ];\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n  public dismissible = false;\n\n  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}\n\n  public show(): void {\n    this.sidebarService\n      .open(this.contentExample, {\n        closeable: true,\n        header: 'Header',\n        width: '400px',\n        cancelButton: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',\n        confirmButton: 'OK',\n        position: this.position,\n        backdrop: this.backdrop,\n        dismissible: this.dismissible,\n        size: 'm',\n      })\n      .subscribe();\n  }\n}\n";
    },
  },
]);
