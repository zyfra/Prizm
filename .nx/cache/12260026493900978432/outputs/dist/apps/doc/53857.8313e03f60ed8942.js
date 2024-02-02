'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [53857],
  {
    53857: o => {
      o.exports =
        "import { Component } from '@angular/core';\nimport { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';\nimport { PrizmTooltipSomeComponent } from './some.component';\n\n@Component({\n  selector: 'prizm-tooltip-with-component-example',\n  templateUrl: './tooltip-with-component-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmTooltipWithComponentExampleComponent {\n  readonly component = new PolymorphComponent(PrizmTooltipSomeComponent);\n  readonly direction = PrizmOverlayOutsidePlacement.TOP_RIGHT;\n}\n";
    },
  },
]);
