'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39971],
  {
    39971: n => {
      n.exports =
        "import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';\nimport {\n  PrizmOverlayControl,\n  PrizmOverlayService,\n  PrizmOverlaySlidePlacement,\n  PrizmOverlaySlidePosition,\n} from '@prizm-ui/components';\n\nexport interface TreeNode {\n  readonly text: string;\n  readonly icon?: string;\n  readonly children?: readonly TreeNode[];\n}\n\n@Component({\n  selector: 'prizm-tree-in-modal-example',\n  templateUrl: './tree-in-modal-example.component.html',\n  styles: [\n    `\n      .box {\n        height: 100%;\n        padding: 1rem;\n        width: 100%;\n        min-width: 300px;\n        background-color: var(--prizm-v3-background-fill-overlay);\n        border-right: 1px solid var(--prizm-v3-background-stroke);\n        color: var(--prizm-v3-text-icon-secondary);\n      }\n\n      .modal-button {\n        width: 100%;\n      }\n    `,\n  ],\n})\nexport class TreeInModalExampleComponent implements OnInit {\n  @ViewChild('someTemplate', { read: TemplateRef, static: true })\n  templateRef!: TemplateRef<unknown>;\n\n  private control!: PrizmOverlayControl;\n  constructor(private readonly overlay: PrizmOverlayService) {}\n\n  ngOnInit() {\n    const position = new PrizmOverlaySlidePosition({\n      // Pass position placement\n      placement: PrizmOverlaySlidePlacement.LEFT,\n    });\n\n    this.control = this.overlay\n      .position(position)\n      .config({\n        closeOnDocClick: true,\n      })\n      .content(this.templateRef)\n      .create();\n  }\n\n  public open(): void {\n    this.control.open();\n  }\n\n  public close(): void {\n    this.control.close();\n  }\n\n  public toggle(): void {\n    this.control.toggle();\n  }\n}\n";
    },
  },
]);
