'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [21432],
  {
    21432: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';\nimport { PrizmConfirmPopupSomeComponent } from './some.component';\n\n@Component({\n  selector: 'prizm-confirm-popup-with-component-example',\n  templateUrl: './confirm-popup-with-component-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmConfirmPopupWithComponentExampleComponent {\n  readonly component = new PolymorphComponent(PrizmConfirmPopupSomeComponent);\n  readonly direction = PrizmOverlayOutsidePlacement.TOP_RIGHT;\n}\n";
    },
  },
]);
