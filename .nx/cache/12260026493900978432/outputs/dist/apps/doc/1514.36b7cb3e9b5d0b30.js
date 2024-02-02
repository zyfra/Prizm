'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1514],
  {
    1514: n => {
      n.exports =
        "import { ChangeDetectorRef, Component } from '@angular/core';\n\n@Component({\n  selector: 'prizm-dropdown-host-custom-style-example',\n  templateUrl: './custom-style-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        flex-flow: column;\n        gap: 8px;\n        padding: 16px;\n      }\n\n      [prizmButton] {\n        width: 100%;\n      }\n    `,\n  ],\n})\nexport class PrizmDropdownHostCustomStyleComponent {\n  open = false;\n  constructor(public readonly cdRef: ChangeDetectorRef) {}\n}\n";
    },
  },
]);
