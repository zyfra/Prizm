'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59146],
  {
    59146: e => {
      e.exports =
        "import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';\nimport {\n  PrizmOverlayControl,\n  PrizmOverlayOutsidePlacement,\n  PrizmOverlayService,\n  PrizmOverlaySlidePlacement,\n  PrizmOverlaySlidePosition,\n} from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-overlay-slide-example',\n  templateUrl: './template.html',\n  styles: [\n    `\n      .box {\n        background: darkseagreen;\n        padding: 8px;\n        display: inline-block;\n        color: white;\n        height: 100%;\n        width: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmOverlayExampleSlideComponent implements OnInit {\n  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef!: ElementRef;\n  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef!: TemplateRef<unknown>;\n\n  private control!: PrizmOverlayControl;\n  constructor(private readonly overlay: PrizmOverlayService) {}\n\n  public ngOnInit(): void {\n    const position = new PrizmOverlaySlidePosition({\n      // Pass position placement\n      placement: PrizmOverlaySlidePlacement.LEFT,\n    });\n\n    this.control = this.overlay\n      .position(position)\n      .config({\n        closeOnDocClick: true,\n      })\n      // PASS TEMPLATE\n      .content(this.templateRef)\n      .create();\n  }\n\n  public open(): void {\n    this.control.open();\n  }\n\n  public close(): void {\n    this.control.close();\n  }\n\n  public toggle(): void {\n    this.control.toggle();\n  }\n}\n";
    },
  },
]);
