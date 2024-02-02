'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [58905],
  {
    58905: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PrizmTheme } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-theme-base-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n      .zone {\n        padding: 1rem;\n        border-radius: 0.5rem;\n        border: 1px solid #ccc;\n      }\n    `,\n  ],\n})\nexport class PrizmThemeBaseExampleComponent {\n  themeValue: PrizmTheme = 'light';\n\n  public light(): void {\n    this.themeValue = 'light';\n  }\n\n  public dark(): void {\n    this.themeValue = 'dark';\n  }\n\n  public toggle(): void {\n    this.themeValue = this.themeValue === 'light' ? 'dark' : 'light';\n  }\n}\n";
    },
  },
]);
