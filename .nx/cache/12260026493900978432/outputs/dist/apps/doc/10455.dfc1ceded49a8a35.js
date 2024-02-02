'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [10455],
  {
    10455: n => {
      n.exports =
        "import { ChangeDetectorRef, Component } from '@angular/core';\n\n@Component({\n  selector: 'prizm-dropdown-host-example-with-custom-context',\n  templateUrl: './with-custom-context.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        flex-flow: column;\n        gap: 8px;\n        padding: 16px;\n        color: var(--prizm-v3-text-icon-primary);\n      }\n\n      [prizmButton] {\n        width: 100%;\n      }\n    `,\n  ],\n})\nexport class PrizmDropdownHostExampleWithCustomContextComponent {\n  open = false;\n  customData = { customValue: 1, content: 'EXAMPLE' };\n\n  constructor(public readonly cdRef: ChangeDetectorRef) {}\n}\n";
    },
  },
]);
