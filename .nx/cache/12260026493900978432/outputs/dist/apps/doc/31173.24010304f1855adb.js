'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [31173],
  {
    31173: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-with-seconds-example',\n  templateUrl: './input-layout-date-time-with-seconds-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateTimeWithSecondsExampleComponent {\n  public readonly value = new UntypedFormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30, 15)]);\n}\n";
    },
  },
]);
