"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73901],{73901:n=>{n.exports="import { Component, ElementRef, inject, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';\nimport {\n  PrizmOverlayControl,\n  PrizmOverlayOutsidePlacement,\n  PrizmOverlayRelativePosition,\n  PrizmOverlayService,\n} from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-overlay-custom-context',\n  templateUrl: './custom-context.component.html',\n  styles: [\n    `\n      .box {\n        background: darkseagreen;\n        padding: 8px;\n        display: inline-block;\n        color: white;\n        margin-top: 3px;\n      }\n    `,\n  ],\n})\nexport class PrizmOverlayCustomContextExampleComponent implements OnInit {\n  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef!: ElementRef;\n  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef!: TemplateRef<unknown>;\n\n  private control!: PrizmOverlayControl;\n  private injector = inject(Injector);\n  constructor(private readonly overlay: PrizmOverlayService) {}\n\n  public ngOnInit(): void {\n    const position = new PrizmOverlayRelativePosition({\n      // Pass position placement\n      placement: PrizmOverlayOutsidePlacement.BOTTOM_LEFT,\n      // Pass source element\n      element: this.elementRef.nativeElement,\n      // On scroll re calculate position\n      autoReposition: true,\n    });\n\n    this.control = this.overlay\n      .position(position)\n      .config({\n        closeOnDocClick: true,\n        backdrop: false,\n      })\n      // PASS TEMPLATE\n      .content(this.templateRef, {\n        testData: 1,\n      })\n      .create({\n        parentInjector: this.injector,\n      });\n  }\n\n  public open(): void {\n    this.control.open();\n  }\n\n  public close(): void {\n    this.control.close();\n  }\n\n  public toggle(): void {\n    this.control.toggle();\n  }\n}\n"}}]);