'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [58430],
  {
    58430: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-select-full-width-example',\n  templateUrl: './select-full-width-example.component.html',\n  styles: [\n    `\n      :host {\n        --prizm-input-layout-width: 100%;\n      }\n\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectFullWidthExampleComponent {\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly control = new UntypedFormControl(this.items[1]);\n\n  public setDefaultValue(): void {\n    this.control.setValue(this.items[0], { emitEvent: false });\n  }\n}\n";
    },
  },
]);
