'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59082],
  {
    59082: e => {
      e.exports =
        "import { Component, ElementRef, ViewChild } from '@angular/core';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-theme-inverted-example',\n  templateUrl: './inverted.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n      .zone {\n        padding: 1rem;\n        border-radius: 0.5rem;\n        border: 1px solid #ccc;\n      }\n    `,\n  ],\n})\nexport class PrizmThemeInvertedExampleComponent {\n  @ViewChild('zone', { static: true, read: ElementRef }) el!: ElementRef;\n  public invetedThemeValue!: string;\n  constructor(public readonly theme: PrizmThemeService) {}\n\n  public light(): void {\n    this.theme.update('light', this.el.nativeElement);\n  }\n\n  public dark(): void {\n    this.theme.update('dark', this.el.nativeElement);\n  }\n\n  public toggle(): void {\n    this.theme.update(\n      this.theme.getByElement(this.el.nativeElement) === 'light' ? 'dark' : 'light',\n      this.el.nativeElement\n    );\n  }\n}\n";
    },
  },
]);
