'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [30424],
  {
    30424: n => {
      n.exports =
        "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'prizm-listing-item-with-instrumnets-example',\n  templateUrl: './listing-item-with-instruments-example.component.html',\n  styles: [\n    `\n      .container {\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        padding: 16px;\n        background-color: var(--prizm-v3-background-fill-secondary);\n      }\n\n      prizm-listing-item {\n        max-width: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmListingItemWithInstrumnetsExampleComponent {\n  readonly cells = [\n    {\n      title: 'My List Item',\n      disabled: false,\n      selected: false,\n      count: 10,\n    },\n    {\n      title: 'My Selected List Item',\n      disabled: false,\n      selected: true,\n      count: 9,\n    },\n    {\n      title: 'My Disabled List Item',\n      disabled: true,\n      selected: false,\n      count: 0,\n    },\n  ];\n}\n";
    },
  },
]);
