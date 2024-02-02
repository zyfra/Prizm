'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [4528],
  {
    4528: n => {
      n.exports =
        "import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';\nimport {\n  PrizmOverlayControl,\n  PrizmOverlayFullscreenPosition,\n  PrizmOverlayGlobalPosition,\n  PrizmOverlayInsidePlacement,\n  PrizmOverlayService,\n} from '@prizm-ui/components';\nimport { PrizmOverlaySomeComponent } from './some-component';\n\n@Component({\n  selector: 'prizm-overlay-component-example',\n  templateUrl: './template.html',\n  styles: [\n    `\n      .box {\n        width: 100%;\n        height: 100%;\n        background: darkseagreen;\n        padding: 8px;\n        display: inline-block;\n        color: white;\n      }\n    `,\n  ],\n})\nexport class PrizmOverlayExampleWithViewComponent implements OnInit {\n  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef!: ElementRef;\n\n  private control!: PrizmOverlayControl;\n  constructor(private readonly overlay: PrizmOverlayService) {}\n\n  public ngOnInit(): void {\n    const position = new PrizmOverlayGlobalPosition({\n      // Pass position placement\n      placement: PrizmOverlayInsidePlacement.TOP,\n      width: '100%',\n      height: 'auto',\n      // Pass source element\n      element: this.elementRef.nativeElement,\n    });\n\n    this.control = this.overlay\n      .position(position)\n      .config({\n        closeOnDocClick: true,\n      })\n      // PASS COMPONENT\n      .content(PrizmOverlaySomeComponent)\n      .create();\n  }\n\n  public open(): void {\n    this.control.open();\n  }\n\n  public close(): void {\n    this.control.close();\n  }\n\n  public toggle(): void {\n    this.control.toggle();\n  }\n}\n";
    },
  },
]);
