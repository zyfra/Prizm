'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [44908],
  {
    44908: e => {
      e.exports =
        "import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { FormControl, Validators } from '@angular/forms';\nimport { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-sidebar-with-parent-example',\n  templateUrl: './with-parent.component.html',\n})\nexport class PrizmSidebarWithParentExampleComponent {\n  @ViewChild('contentExample') contentExample!: TemplateRef<never>;\n  @ViewChild('parentPanel') parentPanel!: ElementRef<never>;\n  public positionVariants: PrizmOverlayInsidePlacement[] = [\n    PrizmOverlayInsidePlacement.LEFT,\n    PrizmOverlayInsidePlacement.RIGHT,\n    PrizmOverlayInsidePlacement.TOP,\n    PrizmOverlayInsidePlacement.BOTTOM,\n  ];\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n  public dismissible = false;\n\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly control = new FormControl(this.items[1], [Validators.required]);\n\n  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}\n\n  public show(): void {\n    this.sidebarService\n      .open(this.contentExample, {\n        closeable: true,\n        header: 'Header',\n        width: '400px',\n        height: '200px',\n        cancelButton: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',\n        confirmButton: 'OK',\n        position: this.position,\n        backdrop: this.backdrop,\n        dismissible: this.dismissible,\n        size: 'm',\n        parentContainer: this.parentPanel.nativeElement,\n        styleVars: {\n          sidebarContentPadding: '5px 10px',\n        },\n      })\n      .subscribe();\n  }\n}\n";
    },
  },
]);
