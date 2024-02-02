"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[15274],{15274:e=>{e.exports="import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';\nimport { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';\nimport { of } from 'rxjs';\n\n@Component({\n  selector: 'prizm-sidebar-custom-header-template-example',\n  templateUrl: './custom-header-template.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSidebarCustomHeaderTemplateExampleComponent {\n  public positionVariants: PrizmOverlayInsidePlacement[] = [\n    PrizmOverlayInsidePlacement.LEFT,\n    PrizmOverlayInsidePlacement.RIGHT,\n  ];\n  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];\n  public backdrop = false;\n  public dismissible = false;\n  public canClose = true;\n\n  @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;\n  @ViewChild('outerTemplate') outerTemplate!: TemplateRef<any>;\n\n  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}\n\n  public show(): void {\n    this.sidebarService\n      .open(\n        `\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        `,\n        {\n          zIndex: 20,\n          outerContent: this.outerTemplate,\n          closeable: true,\n          width: '400px',\n          canClose: () => of(this.canClose),\n          position: this.position,\n          dismissible: this.dismissible,\n          backdrop: this.backdrop,\n          headerTemplate: this.headerTemplate,\n          size: 'm',\n        }\n      )\n      .subscribe();\n  }\n}\n"}}]);