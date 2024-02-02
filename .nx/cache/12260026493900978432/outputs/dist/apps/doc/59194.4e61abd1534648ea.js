'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59194],
  {
    59194: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-date-time-with-seconds-example',\n  templateUrl: './input-date-time-with-seconds-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputDateTimeWithSecondsExampleComponent {\n  public readonly value = new UntypedFormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30, 15)]);\n}\n";
    },
  },
]);
