'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [51811],
  {
    51811: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmShadowTypeEnum } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-shadow-base-example',\n  templateUrl: './shadow-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 30px;\n        flex-wrap: wrap;\n      }\n\n      .shadow-container {\n        width: 200px;\n        height: 200px;\n        background: var(--prizm-v3-background-fill-primary);\n        border-radius: 0.5rem;\n        display: flex;\n        flex-flow: column;\n        gap: 1rem;\n        padding: 16px;\n\n        .title {\n          color: var(--prizm-v3-text-icon-secondary);\n          font-size: 14px;\n          font-weight: 800;\n        }\n\n        .description {\n          color: var(--prizm-v3-text-icon-tertiary);\n          font-size: 12px;\n        }\n      }\n    `,\n  ],\n})\nexport class PrizmShadowBaseExampleComponent {\n  readonly PrizmShadowTypeEnum = PrizmShadowTypeEnum;\n}\n";
    },
  },
]);
