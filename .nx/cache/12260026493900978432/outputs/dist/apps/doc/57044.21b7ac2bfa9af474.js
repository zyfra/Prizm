'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57044],
  {
    57044: e => {
      e.exports =
        "import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-sidebar-custom-wrapper-style-example',\n  templateUrl: './custom-wrapper-style.component.html',\n})\nexport class PrizmSidebarCustomWrapperStyleExampleComponent {\n  @ViewChild('contentExample') contentExample!: TemplateRef<any>;\n  public backdrop = false;\n  public dismissible = false;\n\n  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}\n\n  public show(): void {\n    this.sidebarService\n      .open(this.contentExample, {\n        closeable: true,\n        header: 'Header',\n        width: '400px',\n        cancelButton: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',\n        position: PrizmOverlayInsidePlacement.LEFT,\n        confirmButton: 'OK',\n        backdrop: this.backdrop,\n        styleVars: {\n          sidebarContentPadding: 0,\n        },\n        dismissible: this.dismissible,\n        size: 'm',\n      })\n      .subscribe();\n  }\n}\n";
    },
  },
]);
